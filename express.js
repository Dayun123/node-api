// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const request = require('request');
const config = require('./config');
const bodyParser = require('body-parser');
const authService = require('./services/authService');
const transformContent = require('./services/transformContent');
const logger = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the 'NODE_ENV' variable to activate the 'morgan' logger or not
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  app.use(logger('dev'));
}

// Routing - If it gets bigger, put in a different file or directory called routes
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {

  app.route('/')
    .post(authService.checkForToken, transformContent.transformedContent);

  app.route('/failauth')
    .post(transformContent.transformedContent);

  app.route('/auth')
    .post(authService.checkForToken, function (req, res) {
      let token = config.getToken();
      res.send({ token: token });
    });

} else if (process.env.NODE_ENV === 'production') {
  app.route('/')
    .post(authService.checkForToken, transformContent.transformedContent);
}

app.listen(3003, function () {
  console.log('Express server listening on port 3003');
});




