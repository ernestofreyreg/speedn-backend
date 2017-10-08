const R = require('ramda')

const cleanTransactions = accountTransactions => {
  const at = R.pluck('MonetaryTransactionResponseList')(accountTransactions)
  return R.compose(
    R.sortBy(R.prop('PostedDate')),
    R.filter(R.propEq('ShortDescription', 'PUR')),
    R.reduce(R.concat, [])
  )(at)
}

module.exports = cleanTransactions
