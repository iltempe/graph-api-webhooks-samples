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
  if (req.query['hub.verify_token'] === 'CAAOSGgHyQMYBAJa8QJercF3accibqbWH5Cv6wV1gDASuiHgkqUZAWblCuvua1N4Jw1I3fRZCWUySnc5rvLj3QxSL2h4zWDbLdg2aZCrleyTFV2Mpt52B3oSAvQ37An7vhdzH6oy35lZB5Xbp24VzDOnXT8UwaQWdCR7leSoWJOvbKY31xYIvzTR9dHvC3eIZD') {
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
