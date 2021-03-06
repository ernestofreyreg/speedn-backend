const R = require('ramda')
const Big = require('big.js')

const t = [
  {
    "Status": {
      "StatusCode": "",
      "Severity": "",
      "StatusDescription": ""
    },
    "MonetaryTransactionResponseList": [
      {
        "_id": "59d93150721ae2944407db0b",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "45.0",
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
      },
      {
        "_id": "59d93150721ae2944407db0c",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "10.0",
        "TransactionReferenceNumber": "24269796251500704530355",
        "MaskedTransactionReferenceNumber": "0355",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "PUR",
        "TransactionDescription": "MILES EXPRESS          FRANKLIN      TN",
        "StandardIndustryCode": "07542",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091113",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d93150721ae2944407db0d",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "137.02",
        "TransactionReferenceNumber": "1",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "ADJ",
        "TransactionDescription": "INTEREST CHARGE ON PURCHASES",
        "StandardIndustryCode": "00000",
        "TransactionCode": "774",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T03:21:26.011914",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d93150721ae2944407db0e",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "11.01",
        "TransactionReferenceNumber": "24071056245987119995578",
        "MaskedTransactionReferenceNumber": "5578",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-31",
        "ShortDescription": "PUR",
        "TransactionDescription": "CHINATOWN RESTAURANT   NASHVILLE    TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015587",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d93150721ae2944407db0f",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166248000805643040",
        "MaskedTransactionReferenceNumber": "3040",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-04",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015552",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d93150721ae2944407db10",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "18.03",
        "TransactionReferenceNumber": "24426296248980002491657",
        "MaskedTransactionReferenceNumber": "1657",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "NEW CHINA              FRANKLIN     TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015144",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d93150721ae2944407db11",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166247000265001086",
        "MaskedTransactionReferenceNumber": "1086",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015112",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d93150721ae2944407db12",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-08-31",
        "PostedAmount": "30.0",
        "TransactionReferenceNumber": "24755426244132447031304",
        "MaskedTransactionReferenceNumber": "1304",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-30",
        "ShortDescription": "PUR",
        "TransactionDescription": "THE RETREAT OF BRENTWO BRENTWOOD    TN",
        "StandardIndustryCode": "07230",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-12T10:25:12.318986",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d93150721ae2944407db13",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "5.47",
        "TransactionReferenceNumber": "24431066251400364000248",
        "MaskedTransactionReferenceNumber": "0248",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-07",
        "ShortDescription": "PUR",
        "TransactionDescription": "DIMPLES DELI           BRENTWOOD     TN",
        "StandardIndustryCode": "05814",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091147",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dce6",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "45.0",
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
      },
      {
        "_id": "59d943d2721ae2944407dce7",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "10.0",
        "TransactionReferenceNumber": "24269796251500704530355",
        "MaskedTransactionReferenceNumber": "0355",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "PUR",
        "TransactionDescription": "MILES EXPRESS          FRANKLIN      TN",
        "StandardIndustryCode": "07542",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091113",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dce8",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "137.02",
        "TransactionReferenceNumber": "1",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "ADJ",
        "TransactionDescription": "INTEREST CHARGE ON PURCHASES",
        "StandardIndustryCode": "00000",
        "TransactionCode": "774",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T03:21:26.011914",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dce9",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "11.01",
        "TransactionReferenceNumber": "24071056245987119995578",
        "MaskedTransactionReferenceNumber": "5578",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-31",
        "ShortDescription": "PUR",
        "TransactionDescription": "CHINATOWN RESTAURANT   NASHVILLE    TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015587",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dcea",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166248000805643040",
        "MaskedTransactionReferenceNumber": "3040",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-04",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015552",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dceb",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "18.03",
        "TransactionReferenceNumber": "24426296248980002491657",
        "MaskedTransactionReferenceNumber": "1657",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "NEW CHINA              FRANKLIN     TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015144",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dcec",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166247000265001086",
        "MaskedTransactionReferenceNumber": "1086",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015112",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dced",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-08-31",
        "PostedAmount": "30.0",
        "TransactionReferenceNumber": "24755426244132447031304",
        "MaskedTransactionReferenceNumber": "1304",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-30",
        "ShortDescription": "PUR",
        "TransactionDescription": "THE RETREAT OF BRENTWO BRENTWOOD    TN",
        "StandardIndustryCode": "07230",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-12T10:25:12.318986",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d943d2721ae2944407dcee",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "5.47",
        "TransactionReferenceNumber": "24431066251400364000248",
        "MaskedTransactionReferenceNumber": "0248",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-07",
        "ShortDescription": "PUR",
        "TransactionDescription": "DIMPLES DELI           BRENTWOOD     TN",
        "StandardIndustryCode": "05814",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091147",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec1",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "45.0",
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
      },
      {
        "_id": "59d945d7721ae2944407dec2",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "10.0",
        "TransactionReferenceNumber": "24269796251500704530355",
        "MaskedTransactionReferenceNumber": "0355",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "PUR",
        "TransactionDescription": "MILES EXPRESS          FRANKLIN      TN",
        "StandardIndustryCode": "07542",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091113",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec3",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "137.02",
        "TransactionReferenceNumber": "1",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "ADJ",
        "TransactionDescription": "INTEREST CHARGE ON PURCHASES",
        "StandardIndustryCode": "00000",
        "TransactionCode": "774",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T03:21:26.011914",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec4",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "11.01",
        "TransactionReferenceNumber": "24071056245987119995578",
        "MaskedTransactionReferenceNumber": "5578",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-31",
        "ShortDescription": "PUR",
        "TransactionDescription": "CHINATOWN RESTAURANT   NASHVILLE    TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015587",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec5",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166248000805643040",
        "MaskedTransactionReferenceNumber": "3040",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-04",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015552",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec6",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "18.03",
        "TransactionReferenceNumber": "24426296248980002491657",
        "MaskedTransactionReferenceNumber": "1657",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "NEW CHINA              FRANKLIN     TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015144",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec7",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166247000265001086",
        "MaskedTransactionReferenceNumber": "1086",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015112",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec8",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-08-31",
        "PostedAmount": "30.0",
        "TransactionReferenceNumber": "24755426244132447031304",
        "MaskedTransactionReferenceNumber": "1304",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-30",
        "ShortDescription": "PUR",
        "TransactionDescription": "THE RETREAT OF BRENTWO BRENTWOOD    TN",
        "StandardIndustryCode": "07230",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-12T10:25:12.318986",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d945d7721ae2944407dec9",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "5.47",
        "TransactionReferenceNumber": "24431066251400364000248",
        "MaskedTransactionReferenceNumber": "0248",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-07",
        "ShortDescription": "PUR",
        "TransactionDescription": "DIMPLES DELI           BRENTWOOD     TN",
        "StandardIndustryCode": "05814",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091147",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e09c",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "45.0",
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
      },
      {
        "_id": "59d95d0b721ae2944407e09d",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "10.0",
        "TransactionReferenceNumber": "24269796251500704530355",
        "MaskedTransactionReferenceNumber": "0355",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "PUR",
        "TransactionDescription": "MILES EXPRESS          FRANKLIN      TN",
        "StandardIndustryCode": "07542",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091113",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e09e",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "137.02",
        "TransactionReferenceNumber": "1",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "ADJ",
        "TransactionDescription": "INTEREST CHARGE ON PURCHASES",
        "StandardIndustryCode": "00000",
        "TransactionCode": "774",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T03:21:26.011914",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e09f",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "11.01",
        "TransactionReferenceNumber": "24071056245987119995578",
        "MaskedTransactionReferenceNumber": "5578",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-31",
        "ShortDescription": "PUR",
        "TransactionDescription": "CHINATOWN RESTAURANT   NASHVILLE    TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015587",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e0a0",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166248000805643040",
        "MaskedTransactionReferenceNumber": "3040",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-04",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015552",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e0a1",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "18.03",
        "TransactionReferenceNumber": "24426296248980002491657",
        "MaskedTransactionReferenceNumber": "1657",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "NEW CHINA              FRANKLIN     TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015144",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e0a2",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166247000265001086",
        "MaskedTransactionReferenceNumber": "1086",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015112",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e0a3",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-08-31",
        "PostedAmount": "30.0",
        "TransactionReferenceNumber": "24755426244132447031304",
        "MaskedTransactionReferenceNumber": "1304",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-30",
        "ShortDescription": "PUR",
        "TransactionDescription": "THE RETREAT OF BRENTWO BRENTWOOD    TN",
        "StandardIndustryCode": "07230",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-12T10:25:12.318986",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d0b721ae2944407e0a4",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "5.47",
        "TransactionReferenceNumber": "24431066251400364000248",
        "MaskedTransactionReferenceNumber": "0248",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-07",
        "ShortDescription": "PUR",
        "TransactionDescription": "DIMPLES DELI           BRENTWOOD     TN",
        "StandardIndustryCode": "05814",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091147",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e277",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "45.0",
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
      },
      {
        "_id": "59d95d36721ae2944407e278",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "10.0",
        "TransactionReferenceNumber": "24269796251500704530355",
        "MaskedTransactionReferenceNumber": "0355",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "PUR",
        "TransactionDescription": "MILES EXPRESS          FRANKLIN      TN",
        "StandardIndustryCode": "07542",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091113",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e279",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "137.02",
        "TransactionReferenceNumber": "1",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-06",
        "ShortDescription": "ADJ",
        "TransactionDescription": "INTEREST CHARGE ON PURCHASES",
        "StandardIndustryCode": "00000",
        "TransactionCode": "774",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T03:21:26.011914",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e27a",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "11.01",
        "TransactionReferenceNumber": "24071056245987119995578",
        "MaskedTransactionReferenceNumber": "5578",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-31",
        "ShortDescription": "PUR",
        "TransactionDescription": "CHINATOWN RESTAURANT   NASHVILLE    TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015587",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e27b",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166248000805643040",
        "MaskedTransactionReferenceNumber": "3040",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-04",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015552",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e27c",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "18.03",
        "TransactionReferenceNumber": "24426296248980002491657",
        "MaskedTransactionReferenceNumber": "1657",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "NEW CHINA              FRANKLIN     TN",
        "StandardIndustryCode": "05812",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015144",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e27d",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-06",
        "PostedAmount": "69.0",
        "TransactionReferenceNumber": "24692166247000265001086",
        "MaskedTransactionReferenceNumber": "1086",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-03",
        "ShortDescription": "PUR",
        "TransactionDescription": "HUMANA HEALTH PLAN INC 800-992-2551 KY",
        "StandardIndustryCode": "05960",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-14T02:50:13.015112",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e27e",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-08-31",
        "PostedAmount": "30.0",
        "TransactionReferenceNumber": "24755426244132447031304",
        "MaskedTransactionReferenceNumber": "1304",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-08-30",
        "ShortDescription": "PUR",
        "TransactionDescription": "THE RETREAT OF BRENTWO BRENTWOOD    TN",
        "StandardIndustryCode": "07230",
        "TransactionCode": "600",
        "TransactionSource": "Billed",
        "TransactionDateTime": "2016-09-12T10:25:12.318986",
        "Level3DataAvailSwitch": "false"
      },
      {
        "_id": "59d95d36721ae2944407e27f",
        "AccountPrimaryIdentifier": "00000004037670082902254",
        "AccountProductCode": "CCD",
        "PostedDate": "2016-09-08",
        "PostedAmount": "5.47",
        "TransactionReferenceNumber": "24431066251400364000248",
        "MaskedTransactionReferenceNumber": "0248",
        "DebitCreditCode": "D",
        "EffectiveDate": "2016-09-07",
        "ShortDescription": "PUR",
        "TransactionDescription": "DIMPLES DELI           BRENTWOOD     TN",
        "StandardIndustryCode": "05814",
        "TransactionCode": "600",
        "TransactionSource": "UnBilled",
        "TransactionDateTime": "2016-09-19T02:28:04.091147",
        "Level3DataAvailSwitch": "false"
      }
    ]
  }
]


const predictNextTransaction = accountTransactions => {
  const at = R.pluck('MonetaryTransactionResponseList')(accountTransactions)
  const transactions = R.compose(
    R.filter(R.propEq('ShortDescription', 'PUR')),
    R.reduce(R.concat, [])
  )(at)

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
    matrix: Object.keys(matrix).reduce((prev, item) => Object.assign(prev, {[item]: Math.floor(R.sum(matrix[item]) / matrix[item].length)}), {}),
    keys: uniques
  }
}




console.log(predictNextTransaction(t))
