/*jslint node: true */
'use strict';

var frisby = require("frisby");

frisby.create('Get a-z programme title and image feed')
  .get('http://localhost/programme?letter=a&page=1')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .toss();