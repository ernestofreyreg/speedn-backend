const R = require('ramda')

const predictNextTransaction = transactions => {
  const uniques = R.compose(
    R.uniq,
    R.pluck('TransactionDescription')
  )(transactions)

  const matrix = uniques.reduce(
    (prev, item) => Object.assign(prev, {[item]: []}),
    {}
  )

  transactions.forEach((t, index) => {
    if (index < 1) return

    const prev = transactions[index - 1]

    matrix[prev.TransactionDescription].push(
      R.indexOf(t.TransactionDescription)(uniques)
    )
  })

  return {
    matrix: Object.keys(matrix).reduce((prev, item) => Object.assign(prev, {[item]: Math.round(R.sum(matrix[item]) / matrix[item].length)}), {}),
    keys: uniques
  }
}

module.exports = predictNextTransaction
