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

    ////////////////////////////////////////////////////////////////////////////////////

    // this loop wont work as expected
    for (var i = 1; i <= 5; i++){
        setTimeout(function() {
            console.log("i: " + i);
        }, i * 1000);
    }

    for (var i = 1; i <= 5; i++){

        // use IIFE
        (function(i) {
            setTimeout(function() {
            console.log("i: " + i);
        }, i * 1000)})(i);
    }

    ////////////////////////////////////////////////////////////////////////////////////

    // use let keyword for setting i its own
    // scope every time
    for (let i = 1; i <= 5; i++){
        setTimeout(function() {
            console.log("i: " + i);
        }, i * 1000);
    }

    ////////////////////////////////////////////////////////////////////////////////////

    // not closure - object reference - must be a function so it can be
    // transported out for it to be closure
    var foo = (function(){

        var o = { bar: "bar" };

        return { obj: o };

    })();

    console.log(foo.obj.bar);

    ////////////////////////////////////////////////////////////////////////////////////

    // classic module  pattern
    var foo = (function(){

        var o = { bar: "bar" };

        return {
            bar: function() {
                console.log(o.bar);
            }
        };

    })();

    foo.bar();

    ////////////////////////////////////////////////////////////////////////////////////

    // Another variation of module pattern (modified module pattern)
    var foo = (function(){
        
        var publicAPI = {
            bar: function() {
                publicAPI.baz();
            },
            baz: function() {
                console.log("baz");
            }
        };
        return publicAPI;
    })();
        
    foo.bar();

    // $.getJSON("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey={your_api_key}&jsoncallback=?",
    // function(data){
    // // data is JSON response object
    // });

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
