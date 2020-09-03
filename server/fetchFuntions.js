// const { authOptions, address } = require('./routesHelpers');
// const fetch = require('isomorphic-fetch');

// const logIn = async () =>
//   await fetch(address, authOptions)
//     .then((res) => {
//       if (res.status >= 400) {
//         throw new Error('Bad response from server');
//       }
//       return res.json();
//     })
//     .then((stories) => {
//       return stories;
//     })
//     .catch((err) => err);

// module.exports = logIn;

const { authOptions, address } = require('./routesHelpers');
const fetch = require('isomorphic-fetch');

const logIn = async () => {
  await fetch(address, authOptions)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then((res) => {
      console.log('=================>', res);
      const stories = res.json();
      console.log(stories, address, authOptions);
      return stories;
    })
    .catch((err) => console.log('ERROR ==>', err));
};

const handleValidation = (response) => {
  console.log('RESPONSE', response);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

module.exports = logIn;
