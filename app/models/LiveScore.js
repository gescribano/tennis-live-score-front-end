define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var LiveScore = Backbone.Model.extend({
      
      url: "app/live_score_sample_json_a1.json",
      
      parse: function( response, options ){
        
        _.each( response.tournaments, function( tournament ){
          
          //console.log( tournament );
          
          app.tournaments.add( [ tournament ] , { merge: true } );
          
        });
        
        console.log( app.tournaments.length );
        
      }
      
    });

    // Module Exports
    return LiveScore;
    
  }
  
);