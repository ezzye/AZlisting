/*jslint node: true */
"use strict";

var express = require('express');

var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8888;

var azprocessor = require('./azprocessor');

app.get(/programme/, azprocessor.getmyAPI, azprocessor.getexternalAPI, azprocessor.myazlisting);

app.use('/', express.static(__dirname + '/app'));

app.listen(port,function() {
  console.log("Gulp is running my app on port 8888");
});
