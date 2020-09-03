const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser');

const app = new express();
const port = 5678;
// app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json()); https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

app
  .use(express.json())
  .use(morgan('dev'))
  .use(require('./routes/login'))
  .use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
