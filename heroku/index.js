/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log(req);
  res.send('It works!');
});

app.get('/facebook', function (req, res) {
  if (req.query['hub.verify_token'] === 'CAAOSGgHyQMYBAJ6DR8DnZB51uW9P5zI9qJYsRX7wklzDfEmVQ0ijcZAaxYNTt4YAaZCwSaCoypKQI6MF50tuIby6D4ZAkq5eWvb9qZAPAWpCod2PhsQNSFWFl7lkRa5jiigrUQH0U5hN599lhzz5ZCaFGSIsknhin5AszArlZB4wRoDT6w8754EuNXhh2xeCgAZD') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

app.post('/facebook', function(req, res) {
  console.log('Facebook request body:');
  console.log(req.body);
  // Process the Facebook updates here
  res.sendStatus(200);
});

app.post('/instagram', function(req, res) {
  console.log('Instagram request body:');
  console.log(req.body);
  // Process the Instagram updates here
  res.sendStatus(200);
});

app.listen();
