/*jslint node: true */
'use strict';

var urldef = require("url");
var request = require("request");
var page = 1;
var letter = "s";
var azlistingData;


//parse req url to find letter and page
exports.getmyAPI = function(req,res,next) {
  var endpoint = urldef.parse(req.url,true).pathname;
  var message = urldef.parse(req.url,true).query;
  if(endpoint !== "/programme") {return res.end('error - wrong path');}
  console.log(message);
  letter = message.letter.toLowerCase();
  page = message.page;
  console.log(letter,page);
  next();
};

//consume external api based on letter and page
exports.getexternalAPI = function(req,res,next) {
  var externalAPIurl = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/' + letter + '/programmes?page=' + page;
  request(externalAPIurl,function(error,res,body) {
    if (!error && res.statusCode === 200) {
      azlistingData = JSON.parse(body);
      next();
    } else {
      console.log(error);
    }
  });
};

//find total pages of data
var totalPages = function(count,perpage) {
  return Math.ceil(count / perpage);
};

//remove recipe
var recipeurl = function(url,recipe) {
  return url.replace('{recipe}',recipe);
};

//respond with azlisting total page, title, image url
exports.myazlisting = function(req,res) {
  var myData = {};
  myData.totpages = totalPages(azlistingData.atoz_programmes.count, azlistingData.atoz_programmes.per_page);
  myData.elements = [];
  azlistingData.elements.forEach(function(item) {
    myData.elements.push({
      title: item.title,
      image: recipeurl(item.images.standard,'96x96')
    });
  });
  res.writeHead(200,{'content-type': 'application/json'});
  res.json(myData);
  res.end();
};