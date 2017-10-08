#!/usr/bin/env node

const RTM = require('satori-rtm-sdk')

const rtm = new RTM('wss://tg4i6zyb.api.satori.com', '3cceEf6BFFA5a0Ae953F7AfF7F3fAF84')

rtm.on("enter-connected", function() {
  setTimeout(() => {
    console.log(`Prediction calculated`)
    rtm.publish('updates', {"type": "predict", "id": "908997180284469041"})
    rtm.stop()
  }, 1000)
})

rtm.start()
