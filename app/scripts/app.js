'use strict';

/**
 * @ngdoc overview
 * @name gitWebServiceApp
 * @description
 * # gitWebServiceApp
 *
 * Main module of the application.
 */
angular
  .module('gitWebServiceApp', [ 
    'ngResource',
    'ngRoute', 
    'ui.router'
  ])
  .config(function ($routeProvider, $stateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .otherwise({
        redirectTo: '/'
      });

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html'
        })
        .state('list', {
            url: '/list?user',
            templateUrl: 'views/list.html' 
        })
  });
