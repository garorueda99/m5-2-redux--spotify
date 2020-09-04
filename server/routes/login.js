/**
  Endpoints for Providing the Application Credentials to Spotify
**/
const logIn = require('./fetchFuntions');
const router = require('express').Router();

router.get('/spotify_access_token', async (req, res) => {
  const response = await logIn();
  res.send(response);
});

module.exports = router;
