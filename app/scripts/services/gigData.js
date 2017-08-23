//var mongojs = require('mongojs');

gigFinderApp.factory('gigData', function ($resource) {
    var resource = $resource('/data/gigs/:id', {id:'@id'});
    
    // var db = mongojs('mongodb://eoinEvents:fiatpunto26@ds161032.mlab.com:61032/events', ['events']);
    // var results = "";
    
    // console.log("getting events");
    
    
//  db.events.find(function(err, events) {
//         console.log(err);
//         console.log(events);
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(events);
//         }
     
//      results = events;
//     });

//     console.log("got events");

                  
    return {
       getGig: function (gigId) {
           return resource.get({id:gigId});
       },
       saveGig: function(){
           gig.id=999;
           return resource.save(gig);
       },
        getAllGigs: function(){
            return results;
        }
    };
});