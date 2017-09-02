'use strict';

gigFinderApp
  .controller('GigController', function GigController ($scope, gigData, $routeParams) {

    //$scope.gigs = gigData.getAllGigs;

    $scope.gig = gigData.getGig($routeParams.gigId);

      //  gigData.getGig()
      //         .$promise
      //           .then(function(gig) {
      //               $scope.gig = gig;
      //               console.log(gig);
      //           },
      //             function(response) {
      //               console.log(response);
      //             });
    console.log($scope.gig);
  });
