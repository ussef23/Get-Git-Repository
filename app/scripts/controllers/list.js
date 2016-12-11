'use strict';

/**
 * @ngdoc function
 * @name gitWebServiceApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the gitWebServiceApp
 */
angular.module('gitWebServiceApp')
  .controller('ListCtrl', ['$scope', 'Git', '$stateParams' , '$state', function($scope,Git, $stateParams, $state) {
 
 	$scope.username = $stateParams.user

   Git.query({ slug: $stateParams.user }).$promise.then(function(data) {
 

    $scope.user = data;
  }, function(error){
  	 
  		$scope.notfound = false;
  		if(error.status === 404)
  		{
  			$scope.notfound = true;
  		}
  		else
  		{
  			$state.go("main");	
  		}
  		 
	}); 

  }]);
