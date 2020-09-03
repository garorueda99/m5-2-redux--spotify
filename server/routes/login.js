/**
  Endpoints for Providing the Application Credentials to Spotify
**/
const logIn = require('../routesHelpers');
const router = require('express').Router();

router.get('/spotify_access_token', (req, res) => {
  logIn();
  res.send({ todo: true });
});

module.exports = router;
