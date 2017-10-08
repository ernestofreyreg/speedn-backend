const axios = require('axios')
const R = require('ramda')

const getUserOpenAccounts = LegalParticipantIdentifier => {
  return axios.post(
    'https://api119525live.gateway.akana.com:443/user/accounts',
    {LegalParticipantIdentifier}
    )
    .then(response => response.data)
    .then(data => {
      return R.compose(
        R.filter(R.propEq('StatusDescription', 'OPEN')),
        R.map(account => ({
          _id: account._id,
          LegalParticipantIdentifier: account.LegalParticipantIdentifier,
          PrimaryIdentifier: account.PrimaryIdentifier,
          OperatingCompanyIdentifier: account.OperatingCompanyIdentifier,
          ProductCode: account.ProductCode,
          AccessibleBalanceAmount: account.BasicAccountDetail.Balances.AccessibleBalanceAmount,
          InvestmentBalanceAmount: account.BasicAccountDetail.Balances.InvestmentBalanceAmount,
          CreditAvailableBalanceAmount: account.BasicAccountDetail.Balances.CreditAvailableBalanceAmount,
          PayoffBalanceAmount: account.BasicAccountDetail.Balances.PayoffBalanceAmount,
          AvailableBalanceAmount: account.BasicAccountDetail.Balances.AvailableBalanceAmount,
          CurrentBalanceAmount: account.BasicAccountDetail.Balances.CurrentBalanceAmount,
          StatusDescription: account.BasicAccountDetail.Codes.StatusDescription,
          CategoryDescription: account.BasicAccountDetail.Codes.CategoryDescription,
          RedactedAccountNumber: account.BasicAccountDetail.RedactedAccountNumber
        })),
        R.prop('AccessibleAccountDetailList')
      )(data)
    })
    .then(accounts => {
      return R.uniqWith(R.eqProps('PrimaryIdentifier'))(accounts)
    })
}

module.exports = getUserOpenAccounts
