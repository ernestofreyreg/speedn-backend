const axios = require('axios')
const R = require('ramda')

const getAccountTransactionHistory = ({amount}) => {
  return axios.post(
    'https://api132269live.gateway.akana.com/fundstransfer',
    {
      "personalUserID" : "M01260604",
      "channelCode" : "OLB_MM",
      "transactionTypeCode" : "REGPMT",
      "fromOperatingCompanyIdentifier" : "288",
      "fromProductCode" : "DDA",
      "fromPrimaryAccountIdentifier" : "100100511516",
      "fromAccountType" : "SAVINGS",
      "toOperatingCompanyIdentifier" : "52",
      "toProductCode" : "CCD",
      "toPrimaryAccountIdentifier" : "4718240047142264",
      "requestedTransferAmount" : "200",
      "identityIdentifier" : "MOBLBNKG",
      "paymentType" : "OtherAmount",
      "paymentTypeCode" : "FUTUREPMTMADETHRUWEB",
      "effectiveDate" : "2016-01-21",
      "isRecurring" : "true",
      "selectedDayOfMOnth" : "25",
      "enhancedAutoPayTypeCode" : "F"
    }
    )
    .then(response => response.data)

}
