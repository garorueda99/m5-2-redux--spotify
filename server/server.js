const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = new express();

const PORT = 5678;

app
  .use(express.json())
  .use(morgan('dev'))
  //ENDPOINTS
  .use(require('./routes/login'))
  //STATIC FOLDER = assets
  .use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${PORT}.`);
  }
});

//THIS SEEMS TO BE  NOT LONGER REQUIERED
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json()); https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
