#!/usr/bin/env node

const RTM = require('satori-rtm-sdk')

const rtm = new RTM('wss://tg4i6zyb.api.satori.com', '3cceEf6BFFA5a0Ae953F7AfF7F3fAF84')

const mockTransaction1 = {
  "_id": "59d95d0b721ae2944407e09c",
  "AccountPrimaryIdentifier": "00000004037670082902254",
  "AccountProductCode": "CCD",
  "PostedDate": "2016-09-08",
  "PostedAmount": "112.10",
  "TransactionReferenceNumber": "24323036251207911100056",
  "MaskedTransactionReferenceNumber": "0056",
  "DebitCreditCode": "D",
  "EffectiveDate": "2016-09-07",
  "ShortDescription": "PUR",
  "TransactionDescription": "FRANKLIN DERMATOLOGY   FRANKLIN      TN",
  "StandardIndustryCode": "08011",
  "TransactionCode": "600",
  "TransactionSource": "UnBilled",
  "TransactionDateTime": "2016-09-19T02:28:04.091131",
  "Level3DataAvailSwitch": "false"
}

const mockTransaction2 = {
  "_id": "59d95d0b721ae2944407e09c",
  "AccountPrimaryIdentifier": "00000004037670082902254",
  "AccountProductCode": "CCD",
  "PostedDate": "2016-09-08",
  "PostedAmount": "120.450",
  "TransactionReferenceNumber": "24323036251207911100056",
  "MaskedTransactionReferenceNumber": "0056",
  "DebitCreditCode": "D",
  "EffectiveDate": "2016-09-07",
  "ShortDescription": "PUR",
  "TransactionDescription": "THE RETREAT OF BRENTWO BRENTWOOD    TN",
  "StandardIndustryCode": "08011",
  "TransactionCode": "600",
  "TransactionSource": "UnBilled",
  "TransactionDateTime": "2016-09-19T02:28:04.091131",
  "Level3DataAvailSwitch": "false"
}

const mockTransaction3 = {
  "_id": "59d95d0b721ae2944407e09c",
  "AccountPrimaryIdentifier": "00000004037670082902254",
  "AccountProductCode": "CCD",
  "PostedDate": "2016-09-08",
  "PostedAmount": "100.23",
  "TransactionReferenceNumber": "24323036251207911100056",
  "MaskedTransactionReferenceNumber": "0056",
  "DebitCreditCode": "D",
  "EffectiveDate": "2016-09-07",
  "ShortDescription": "PUR",
  "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
  "StandardIndustryCode": "08011",
  "TransactionCode": "600",
  "TransactionSource": "UnBilled",
  "TransactionDateTime": "2016-09-19T02:28:04.091131",
  "Level3DataAvailSwitch": "false"
}

const createPurchasing = (amount, transaction) => ({
  type: 'purchase',
  id: "908997180284469041",
  amount,
  transaction
})

rtm.on("enter-connected", function() {
  setTimeout(() => {
    console.log(`Simulated purchase for Customer '908997180284469041': $100.23`)
    rtm.publish('updates', createPurchasing('100.23', mockTransaction3))
  }, 2000)

  setTimeout(() => {
    console.log(`Simulated purchase for Customer '908997180284469041': $120.45`)
    rtm.publish('updates', createPurchasing('120.45', mockTransaction2))
  }, 6000)

  setTimeout(() => {
    console.log(`Simulated purchase for Customer '908997180284469041': $110.10`)
    rtm.publish('updates', createPurchasing('112.10', mockTransaction1))
    rtm.stop()
  }, 10000)
})

rtm.start()
