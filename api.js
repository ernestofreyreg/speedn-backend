const RTM = require('satori-rtm-sdk')
const getUserAccounts = require('./getUserAccounts')
const getAccountTransactionHistory = require('./getAccountTransactionHistory')
const calculateHistogram = require('./calculateHistogram')
const cleanTransactions = require('./cleanTransactions')
const predictNextTransaction = require('./predictNextTransaction')
const R = require('ramda')
const Promise = require('bluebird')
const Big = require('big.js')

// create an RTM client instance
const rtm = new RTM('wss://tg4i6zyb.api.satori.com', '3cceEf6BFFA5a0Ae953F7AfF7F3fAF84')

// create a new subscription with 'your-channel'
const channel = rtm.subscribe('updates', RTM.SubscriptionMode.SIMPLE)

const storage = { users: {}, histograms: {}, transactions: {} }

const calculateSpeed = histogram => {
  if (histogram.length === 0) {
    return 0
  }

  if (histogram.length === 1) {
    return 50
  }

  const last0 = histogram[histogram.length - 1].total
  const last1 = histogram[histogram.length - 2].total
  const speed = last0.div(last1).times(new Big('100')).toFixed(0)

  return parseInt(speed)
}

const calculateMinusPlus = histogram => {
  if (histogram.length === 0) {
    return 0
  }

  if (histogram.length === 1) {
    return 0
  }

  const last0 = histogram[histogram.length - 1].total
  const last1 = histogram[histogram.length - 2].total
  const minusPlus = last0.sub(last1).abs().toFixed(2)

  return minusPlus
}
const sendUpdate = id => {
  console.log(`Updating ${id}`)

  const histogram = storage.histograms[id] || []

  const speed = calculateSpeed(histogram)
  const minusPlus = calculateMinusPlus(histogram)

  rtm.publish(
    'updates',
    {
      id,
      accounts: storage.users[id],
      type: 'client',
      speed,
      minusPlus,
      lastTransaction: R.last(storage.transactions[id] || [])
    }
  )
}

const refreshClient = id => {
  console.log(`Refresh client: ${id}`)

  return getUserAccounts(id)
    .then(accounts => {
      storage.users[id] = accounts
    })
    .then(() => {
      sendUpdate(id)
    })
    .then(() => {
      return R.filter(R.propEq('CategoryDescription', 'CR CARD'))(storage.users[id])
    })
    .then(R.map(getAccountTransactionHistory))
    .then(Promise.all)
    .then(accountTransactions => {
      storage.transactions[id] = cleanTransactions(accountTransactions)
      storage.histograms[id] = calculateHistogram(storage.transactions[id])

      sendUpdate(id)
    })
}

const simulatePurchase = ({id, amount, transaction}) => {
  console.log(`Simulate purchase client: ${id} - ${amount}`)

  const histogram = storage.histograms[id] || []
  if (histogram.length < 2) {
    return
  }

  const last = histogram[histogram.length - 1]

  last.total = last.total.plus(new Big(amount))
  last.purchases = last.purchases + 1

  const firstCr = R.find(R.propEq('CategoryDescription', 'CR CARD'))(storage.users[id])

  firstCr.AvailableBalanceAmount = new Big(firstCr.AvailableBalanceAmount).sub(new Big(amount)).toFixed(2)

  if (transaction) {
    storage.transactions[id] = storage.transactions[id].concat([transaction])
  }

  sendUpdate(id)
}

const predictNextPurchase = ({id}) => {
  const transactions = storage.transactions[id]
  const predictionMatrix = predictNextTransaction(transactions)
  const lastTransaction = R.last(transactions)
  const nextDescription = predictionMatrix.keys[
    predictionMatrix.matrix[lastTransaction.TransactionDescription]
    ]
  const prediction = R.findLast(R.propEq('TransactionDescription', nextDescription))(transactions)

  rtm.publish(
    'updates',
    {
      id,
      type: 'prediction',
      hasPrediction: true,
      description: prediction.TransactionDescription,
      amount: prediction.PostedAmount
    }
  )
}

const processMessage = message => {
  const { id, type } = message

  if (type === 'refresh_client') {
    return refreshClient(id)
  }

  if (type === 'purchase') {
    return simulatePurchase(message)
  }

  if (type === 'predict') {
    return predictNextPurchase(message)
  }
}

// channel receives any published message
channel.on('rtm/subscription/data', pdu => {
  const messages = pdu.body.messages

  messages.forEach(processMessage)
})

// client receives any PDU and PDU is passed as a parameter
rtm.on('data', pdu => {
  if (pdu.action.endsWith('/error')) {
    rtm.restart()
  }
})

// start the client
rtm.start()
