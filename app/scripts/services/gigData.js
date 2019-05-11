//var mongojs = require('mongojs');

gigFinderApp.factory('gigData', function ($http, $resource) {

    var resource = $resource('/data/gig/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true}});
    var gigs = [
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

    var getGigs = function() {
        console.log(gigs);
        return gigs;
    };

    var getGig = function(gigId) {
        return resource.get({id:gigId});
    };

    var saveGig = function(gig) {
        gig.id = 999;
        return resource.save(gig);
    };

    return {
        getGigs: getGigs,
        saveGig: saveGig,
        getGig: getGig
      };

    // return {
    //     getGig: function(gigId) {
    //         return resource.get({id:gigId});
    //     },
    //     saveGig: function(gig) {
    //         gig.id = 999;
    //         return resource.save(gig);
    //     },
    //     getAllGigs: function() {
    //         console.log(gigs);
    //         return gigs;
    //     } 
        // ,
        // getAllGigs: function() {
        //     // $http({method: 'GET', url: '/#/gigs'})
        //     //     .then(function (data, status, headers, config){
        //     //         console.log(data);
        //     //        },function (data, status, headers, config){       
        //     // });
        //     return $http.get('/gigs')
        //     .then(function(response) {
        //         console.log("coming from servicejs", response.data);
        //         //return data when promise resolved
        //         //that would help you to continue promise chain.
        //         return response.data;
        //     });
        //}
    //};


    // var resource = $resource('/data/gigs/:id', {id:'@id'});
    
    // var db = mongojs('mongodb://eoinEvents:fiatpunto26@ds161032.mlab.com:61032/events', ['events']);
    // var results = "";
    
    // console.log("getting events");
    
    
    // db.events.find(function(err, events) {
    //     console.log(err);
    //     console.log(events);
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(events);
    //     }
        
    //     results = events;
    // });

    // console.log("got events");

                  
    // return {
    //    getGig: function (gigId) {
    //        return resource.get({id:gigId});
    //    },
    //    saveGig: function(){
    //        gig.id=999;
    //        return resource.save(gig);
    //    },
    //     getAllGigs: function(){
    //         return results;
    //     }
    // };
});