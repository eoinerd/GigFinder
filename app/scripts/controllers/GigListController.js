'use strict';

/**
 * @ngdoc function
 * @name gigFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gigFinderApp
 */
gigFinderApp
  .controller('GigListController', function ($scope, gigData) {

      $scope.gigs = gigData.getGigs();

      var page = 0;

      function getEvents(page) {
        $("#events-panel").show();
        $("#attraction-panel").hide();
      
        if (page < 0) {
          page = 0;
          return;
        }
        if (page > 0) {
          if (page > getEvents.json.page.totalPages-1) {
            page=0;
          }
        }
        
        $.ajax({
          type:"GET",
          url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&size=4&page="+page,
          async:true,
          dataType: "json",
          success: function(json) {
                getEvents.json = json;
                showEvents(json);
               },
          error: function(xhr, status, err) {
                console.log(err);
               }
        });
      }
      
      function showEvents(json) {
        var items = $("#events .list-group-item");
        items.hide();
        var events = json._embedded.events;
        var item = items.first();
        for (var i=0;i<events.length;i++) {
          item.children('.list-group-item-heading').text(events[i].name);
          item.children('.list-group-item-text').text(events[i].dates.start.localDate);
          try {
            item.children(".venue").text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
          } catch (err) {
            console.log(err);
          }
          item.show();
          item.off("click");
          item.click(events[i], function(eventObject) {
            console.log(eventObject.data);
            try {
              getAttraction(eventObject.data._embedded.attractions[0].id);
            } catch (err) {
            console.log(err);
            }
          });
          item=item.next();
        }
      }
      
      $("#prev").click(function() {
        getEvents(--page);
      });
      
      $("#next").click(function() {
        getEvents(++page);
      });
      
      function getAttraction(id) {
        $.ajax({
          type:"GET",
          url:"https://app.ticketmaster.com/discovery/v2/attractions/"+id+".json?apikey=XvjL4c2g0poV8VhgVLD1ADONXhojHp5c",
          async:true,
          dataType: "json",
          success: function(json) {
                showAttraction(json);
               },
          error: function(xhr, status, err) {
                console.log(err);
               }
        });
      }
      
      function showAttraction(json) {
        $("#events-panel").hide();
        $("#attraction-panel").show();
        
        $("#attraction-panel").click(function() {
          getEvents(page);
        });
        
        $("#attraction .list-group-item-heading").first().text(json.name);
        $("#attraction img").first().attr('src',json.images[0].url);
        $("#classification").text(json.classifications[0].segment.name + " - " + json.classifications[0].genre.name + " - " + json.classifications[0].subGenre.name);
      }
      
      getEvents(page);


      // var app_key = "WGVx6fGMfTP8Z38T";
      // var oArgs = {
      //               app_key: "WGVx6fGMfTP8Z38T" ,
      //               id: "20218701",
      //               page_size: 25 
      //             };
                  
      // EVDB.API.call("/events/get", oArgs, function(oData) {
      //     $("#apiResponse").val(JSON.stringify(oData));
      //          var data = $("#apiResponse").val();
      //         $scope.gigs = oData;
      //         console.log($scope.gigs.withdrawn);
      //         console.log($scope.gigs.address);
      //         console.log($scope.gigs);
      //   })

    // gigData.getGig()
    //     .then(function(gig) { 
    //         $scope.gig = gig.data; 
    //         console.log(gig.data);
    //     }, function () {} );

    // function(gig) {
    //     $scope.gig = gig;
    // });

    // ////////////////////////////////////////////////////////////////////////////////////

    // // this loop wont work as expected
    // for (var i = 1; i <= 5; i++){
    //     setTimeout(function() {
    //         console.log("i: " + i);
    //     }, i * 1000);
    // }

    // for (var i = 1; i <= 5; i++){

    //     // use IIFE
    //     (function(i) {
    //         setTimeout(function() {
    //         console.log("i: " + i);
    //     }, i * 1000)})(i);
    // }

    // ////////////////////////////////////////////////////////////////////////////////////

    // // use let keyword for setting i its own
    // // scope every time
    // for (let i = 1; i <= 5; i++){
    //     setTimeout(function() {
    //         console.log("i: " + i);
    //     }, i * 1000);
    // }

    // ////////////////////////////////////////////////////////////////////////////////////

    // // not closure - object reference - must be a function so it can be
    // // transported out for it to be closure
    // var foo = (function(){

    //     var o = { bar: "bar" };

    //     return { obj: o };

    // })();

    // console.log(foo.obj.bar);

    // ////////////////////////////////////////////////////////////////////////////////////

    // // classic module  pattern
    // var foo = (function(){

    //     var o = { bar: "bar" };

    //     return {
    //         bar: function() {
    //             console.log(o.bar);
    //         }
    //     };

    // })();

    // foo.bar();

    // ////////////////////////////////////////////////////////////////////////////////////

    // // Another variation of module pattern (modified module pattern)
    // var foo = (function(){
        
    //     var publicAPI = {
    //         bar: function() {
    //             publicAPI.baz();
    //         },
    //         baz: function() {
    //             console.log("baz");
    //         }
    //     };
    //     return publicAPI;
    // })();
        
    // foo.bar();

    // ////////////////////////////////////////////////////////////////////////////////////


    // // Prototypes - behaviour delegation (inheritance)
    // function Foo(who) {
    //     this.me = who;
    // }

    // Foo.prototype.speak = function (){
    //     alert("Hello, I am " + this.me + ".");
    // };

    // var a1 = new Foo("a1");

    // a1.speak();  // alerts: "Hello, I am a1."

    // $.getJSON("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey={your_api_key}&jsoncallback=?",
    // function(data){
    // // data is JSON response object
    // });

    // $scope.gigs = [
    //       {"name": "Kerri Chandler",
    //         "id": 1,
    //         "date": "1/1/2013",
    //         "time": "10:30 am",
    //         "location": {
    //             "address": "Disgtrict 8",
    //             "city": "Dublin",
    //             "province": "Leinster"
    //         },
    //         "imageUrl": "/images/kerri.jpeg"
    //     },
    //      {"name": "Calibre",
    //         "id": 2,
    //         "date": "1/1/2044",
    //         "time": "11:00 pm",
    //         "location": {
    //             "address": "WigWam",
    //             "city": "Cork",
    //             "province": "Munster"
    //         },
    //         "imageUrl": "/images/Calibre-3-650-80.jpg"
    //     }
    //     ,{"name": "MndDsgn",
    //         "id": 3,
    //         "date": "10/6/2018",
    //         "time": "10:30 am",
    //         "location": {
    //             "address": "South Central",
    //             "city": "Los Angeles",
    //             "province": "California"
    //         },
    //         "imageUrl": "/images/thehundreds_mndsgnweb-12.jpg"
    //     },
    //      {"name": "OneMind",
    //         "id": 4,
    //         "date": "25/5/2017",
    //         "time": "6:00 pm",
    //         "location": {
    //             "address": "Rinse",
    //             "city": "Brighton",
    //             "province": "UK"
    //         },
    //         "imageUrl": "/images/maxresdefault.jpg"
    //     }
    // ];
  });
