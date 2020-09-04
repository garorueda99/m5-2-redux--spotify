const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_SECRET;

const address = 'https://accounts.spotify.com/api/token';

const authOptions = {
  method: 'POST',
  headers: {
    Authorization:
      'Basic ' +
      new Buffer.from(clientId + ':' + clientSecret).toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'grant_type=client_credentials',
};

module.exports = {
  authOptions,
  address,
};
