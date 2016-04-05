'use strict';

var azlist = angular.module('azlist',['ui.bootstrap']);

azlist.controller('azlistCtrl',['$scope','getazlist',function($scope,getazlist) {

  $scope.currentPage = 1;
  $scope.numberOfItems = 75;
  $scope.maxSize = 4;
  $scope.radioModel='A';

  $scope.$watchCollection('radioModel', function() {
    getazlist.filteredlist($scope.radioModel,1)
    .then(function(res) {
      $scope.currentPage = 1;
      $scope.items = res.data.elements;
      $scope.maxSize = res.data.totpages;
      $scope.numberOfItems = res.data.totitems;
    });
  })

  $scope.$watchCollection('currentPage', function() {
    getazlist.filteredlist($scope.radioModel,$scope.currentPage)
    .then(function(res) {
      $scope.items = res.data.elements;
      $scope.maxSize = res.data.totpages;
      $scope.numberOfItems = res.data.totitems;
    });
  })
}]);

azlist.factory('getazlist',['$http',function($http) {
  return {
    filteredlist: function(letter,page) {
      return $http.get('http://localhost:8888/programme?letter=' + letter.toLowerCase() + '&page=' + page );
    }
  };
}]);