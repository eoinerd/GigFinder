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
            "imageUrl": "/images/kerri.jpeg"
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
            "imageUrl": "/images/Calibre-3-650-80.jpg"
        }
        ,{"name": "MndDsgn",
            "id": 3,
            "date": "10/6/2018",
            "time": "10:30 am",
            "location": {
                "address": "South Central",
                "city": "Los Angeles",
                "province": "California"
            },
            "imageUrl": "/images/thehundreds_mndsgnweb-12.jpg"
        },
         {"name": "OneMind",
            "id": 4,
            "date": "25/5/2017",
            "time": "6:00 pm",
            "location": {
                "address": "Rinse",
                "city": "Brighton",
                "province": "UK"
            },
            "imageUrl": "/images/maxresdefault.jpg"
        }
        
    ];

  });
