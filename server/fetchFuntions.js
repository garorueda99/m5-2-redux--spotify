const { authOptions, address } = require('./routesHelpers');
const fetch = require('isomorphic-fetch');

const logIn = async () =>
  await fetch(address, authOptions)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then((stories) => {
      return stories;
    })
    .catch((err) => err);

module.exports = logIn;
