'use strict';

var azlist = angular.module('azlist',['ui.bootstrap']);

azlist.controller('azlistCtrl',function($scope,getazlist) {
  $scope.items = getazlist.filteredlist;
  $scope.currentPage = 1;
  $scope.numberOfItems = 44;
  $scope.maxSize = 5;

  $scope.radioModel="A";


});

azlist.factory('getazlist',function() {
  var factory = {};
  factory.filteredlist = [
                            {
                              id: "b07610mb",
                              live: false,
                              type: "episode",
                              title: "Super League Show",
                              images: {
                              type: "image",
                              standard: "http://ichef.bbci.co.uk/images/ic/96x96/p03j15jb.jpg",
                              inherited_from: "brand"
                              }
                            },
                            {
                              id: "b07610mb",
                              live: false,
                              type: "episode",
                              title: "Next League Show",
                              images: {
                              type: "image",
                              standard: "http://ichef.bbci.co.uk/images/ic/96x96/p03j15jb.jpg",
                              inherited_from: "brand"
                              }
                            },
                            {
                              id: "b07610mb",
                              live: false,
                              type: "episode",
                              title: "Another League Show",
                              images: {
                              type: "image",
                              standard: "http://ichef.bbci.co.uk/images/ic/96x96/p03j15jb.jpg",
                              inherited_from: "brand"
                              }
                            },
                            {
                              id: "b07610mb",
                              live: false,
                              type: "episode",
                              title: "Onemore League Show",
                              images: {
                              type: "image",
                              standard: "http://ichef.bbci.co.uk/images/ic/96x96/p03j15jb.jpg",
                              inherited_from: "brand"
                              },
                            }
                          ];
  return factory;
});