const { authOptions, address } = require('./routesHelpers');
const fetch = require('isomorphic-fetch');

const logIn = async () => {
  return await fetch(address, authOptions)
    .then(handleValidation)
    .catch((err) => {
      console.log('ERROR ==>', err);
      return err;
    });
};

const handleValidation = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

module.exports = logIn;
