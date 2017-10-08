const axios = require('axios')
const R = require('ramda')

const getAccountTransactionHistory = ({OperatingCompanyIdentifier,ProductCode,PrimaryIdentifier}) => {
  return axios.post(
    'https://api119622live.gateway.akana.com/account/transactions',
    {
      OperatingCompanyIdentifier,
      ProductCode,
      PrimaryIdentifier
    }
    )
    .then(response => response.data)

}

module.exports = getAccountTransactionHistory
