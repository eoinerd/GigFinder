'use strict';

gigFinderApp.controller('gigDetailsController',
    function gigDetailsController($scope, gigData,$routeParams, $route ) {

        gigData.getGig($routeParams.gigId)
                    .$promise
                        .then(
                        function(gig){
                            $scope.gig = gig;
                            console.log(gig); 
                        })
                        .catch(
                        function(response){
                            console.log(response);
                        }
        );
    
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
    
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);