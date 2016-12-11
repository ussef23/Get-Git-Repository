'use strict';

/**
 * @ngdoc function
 * @name gitWebServiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitWebServiceApp
 */
angular.module('gitWebServiceApp') 
  .controller('MainCtrl', ['$scope', '$state', function($scope,$state) {
 
 
    $scope.search=function(user) { 
    $state.go("list", { 'user': user });
    }
  }]);
