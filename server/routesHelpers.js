const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_SECRET;
const address = 'https://accounts.spotify.com/api/token';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization:
      'Basic ' +
      new Buffer.from(clientId + ':' + clientSecret).toString('base64'),
  },
  form: {
    grant_type: 'client_credentials',
  },
  json: true,
};

module.exports = {
  authOptions,
  address,
};
