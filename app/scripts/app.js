'use strict';

/**
 * @ngdoc overview
 * @name gigFinderApp
 * @description
 * # gigFinderApp
 *
 * Main module of the application.
 */
angular
  .module('gigFinderApp', [
    'ngAria',
    'ngResource',
     'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
