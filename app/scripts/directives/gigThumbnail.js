'use strict';

// angular.module('gigFinderApp')
gigFinderApp.directive('gigThumbnail', function(){
       return {
        restrict: 'E',
        templateUrl: '/views/directives/gigThumbnail.html',
        scope: {
            gig: '=gig'
        }
    }
})