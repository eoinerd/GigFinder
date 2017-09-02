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
  .module('gigFinderApp', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');    
    $routeProvider.when('/newGig', {
          templateUrl: 'views/NewGig.html',
          controller: 'EditGigController'
        });
    $routeProvider.when('/gigs', {
          templateUrl: 'views/GigList.html',
          controller: 'GigListController'
        });
    $routeProvider.when('/gig/:gigId', {
          templateUrl: 'views/GigDetails.html',
          controller: 'GigController'
    });    
    // $routeProvider.when('/gig/:gigId', {
    //       templateUrl: 'views/gigDetails.html',
    //       controller: 'gigDetailsController',
    //       resolve: {
    //           gig: function($route, gigData){
    //               return gigData.getGig($route.current.pathParams.gigId).$promise;
    //           }
    //       }}); 
    // .$routeProvider.when('/register',
    //                     {
    //     templateUrl: 'views/register.html',
    //     controller: 'userController'
    // })

    $routeProvider.otherwise({
        redirectTo: '/gigs'
      });
  });
