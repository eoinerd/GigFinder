'use strict';

gigFinderApp.controller('EditGigController',
     function EditGigController($scope, gigData) {

        $scope.saveGig = function (gig, newGigForm) {
            if(newGigForm.$valid) {
                gigData.saveGig(gig)
                 .$promise.then(
                     function(response) { console.log('success', response)},
                     function(response) { console.log('error', response)}
                 )
            }
        }
});