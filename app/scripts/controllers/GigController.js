'use strict';

gigFinderApp
  .controller('GigController', function GigController ($scope, gigData) {

    $scope.gigs = gigData.getAllGigs;

    $scope.gig = gigData.getGig();
    console.log($scope.gig);
    

  });
