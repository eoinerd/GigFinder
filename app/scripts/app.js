'use strict';

/**
 * @ngdoc overview
 * @name gigFinderApp
 * @description
 * # gigFinderApp
 *
 * Main module of the application.
 */
var gigFinderApp = angular
  .module('gigFinderApp', [
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'})
      .when('/gig/:gigId', {
        templateUrl: 'views/gigDetails.html',
        controller: 'gigDetailsController',
        resolve: {
            gig: function($route, gigData){
                return gigData.getGig($route.current.pathParams.gigId).$promise;
            }
        }
     })
    // .$routeProvider.when('/register',
    //                     {
    //     templateUrl: 'views/register.html',
    //     controller: 'userController'
    // })
      .otherwise({
        redirectTo: '/'
      });

        $locationProvider.html5Mode(true);
  });
