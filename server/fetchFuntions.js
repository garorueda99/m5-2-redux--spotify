const { authOptions, address } = require('./routesHelpers');
const fetch = require('isomorphic-fetch');

const logIn = function () {
  console.log("I'm here");
  fetch(address, authOptions)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then(function (stories) {
      console.log('STORIES', stories);
    });
};

module.exports = logIn;
