/*jslint node: true */
"use strict";

var request = require('request');

describe('server functions',function() {

  it('should respond with letter,page and page total', function(done) {
    request('http://localhost:8888/programme?letter=d&page=1',function(error,res,body) {
      var data = JSON.parse(body);
      expect(data.totpages).toEqual(total);
      done();
    })
  })

});






