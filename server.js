/*jslint node: true */
"use strict";

var express = require('express');

var app = express();

var azprocessor = require('./azprocessor');

app.get(/programme/, azprocessor.getmyAPI, azprocessor.getexternalAPI, azprocessor.myazlisting);

app.use('/', express.static(__dirname + '/app'));

app.listen(8888,function() {
  console.log("Gulp is running my app on port 8888");
});
