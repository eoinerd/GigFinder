'use strict';

gigFinderApp.directive('upvote', function(){
    return {
        restrict: 'E',
        templateUrl: '/views/directives/upvote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});