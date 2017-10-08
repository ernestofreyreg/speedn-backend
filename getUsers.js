const axios = require('axios')
const R = require('ramda')

const getUsers = () => {
  return axios.get('https://api119525live.gateway.akana.com:443/users')
    .then(response => response.data)
    .then(R.prop('LegalParticipantIdentifierList'))
}

module.exports = getUsers
