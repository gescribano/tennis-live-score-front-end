define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var LiveScore = Backbone.Model.extend({
      
      url: "app/live_score_sample_json_a1.json", // TODO: change this when integrating
      
      parse: function( response, options ){
        
        //console.log( app.tournaments );        
        app.tournaments.set( response.tournaments );  // http://backbonejs.org/#Collection-set
        //app.tournaments.update( response.tournaments ); // http://addyosmani.github.io/backbone-fundamentals/#resettingrefreshing-collections
        
        // Refresh tournament data
        //app.tournaments.reset( response.tournaments );
        
        // Now refresh matches data for each tournament model
        _.each( response.tournaments, function( respTnmnt ){
          
          var tnmntModel = app.tournaments.get( respTnmnt.slug );
          //console.log( "Adding "+ respTnmnt.events.length +" events to tnmnt: " + tnmntModel.id );
          //console.log( respTnmnt.events );
          console.log( "Adding 1 event to tnmnt: " + tnmntModel.id );
          // tnmntModel.get("matches").set( respTnmnt.events );
          tnmntModel.get("matches").set([ {
            status: "fin"+Math.random(),
            duration: "dur"+Math.random(),
            gender: "male",
            round: "r1"
          } ]);
          
          // console.log(respTnmnt); return false;
          
        });
        
        // now trigger the rendering
        //app.tournaments.trigger("custom:dataLoaded");
        
        
        //console.log( app.tournaments.length );
        
      }
      
    });

    // Module Exports
    return LiveScore;
    
  }
  
);