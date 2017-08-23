'use strict';

/**
 * @ngdoc function
 * @name gigFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gigFinderApp
 */
gigFinderApp
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.gigs = [
          {"name": "Kerri Chandler",
            "id": 1,
            "date": "1/1/2013",
            "time": "10:30 am",
            "location": {
                "address": "Disgtrict 8",
                "city": "Dublin",
                "province": "Leinster"
            },
            "imageUrl": "http://pascalprecht.github.com/slides/angularjs-insights/img/angularjs-logo.png",
            // "sessions": [
            // {
					  //         "id": 1,
            //         "name": "Directives Masterclass",
            //         "creatorName": "Bob Smith",
            //         "duration": 1,
            //         "level": "Advanced",
            //         "abstract": "In this session you will learn the ins and outs of directives!",
            //         "upVoteCount": 0
            // }],
        },
         {"name": "Calibre",
            "id": 2,
            "date": "1/1/2044",
            "time": "11:00 pm",
            "location": {
                "address": "WigWam",
                "city": "Cork",
                "province": "Munster"
            },
            "imageUrl": "http://pascalprecht.github.com/slides/angularjs-insights/img/angularjs-logo.png",
        }
        
    ];

  });
