const R = require('ramda')
const Big = require('big.js')

const calculateHistogram = transactions => {
  const histogram = {}
  transactions.forEach(t => {
    if (!(t.PostedDate in histogram)) {
      histogram[t.PostedDate] = {
        total: new Big('0.00'),
        purchases: 0,
        date: t.PostedDate
      }
    }

    histogram[t.PostedDate] = {
      total: histogram[t.PostedDate].total.plus(new Big(t.PostedAmount)),
      purchases: histogram[t.PostedDate].purchases + 1,
      date: t.PostedDate
    }
  })

  const all = R.compose(
    R.sortBy(R.prop('date')),
    R.values
  )(histogram)

  return all
}

module.exports = calculateHistogram
