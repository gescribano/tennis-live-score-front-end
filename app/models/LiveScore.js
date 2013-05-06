define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var LiveScore = Backbone.Model.extend({
      
      url: function(){
        
        // TODO: change this when integrating
        // TODO: get date parameter from picker somehow
        var now = new Date();
        return "app/live_score_sample_json_a1.json?v="+ now.getHours() + now.getMinutes() + now.getSeconds(); 
        
      }, 
      
      parse: function( response, options ){
        
        // Refresh tournament data
        app.tournaments.set( response.tournaments ); 
        
        // Now refresh matches data for each tournament model
        _.each( response.tournaments, function( respTnmnt ){
          
          var tnmntModel = app.tournaments.get( respTnmnt.id );
          tnmntModel.matches.set( respTnmnt.events );
          
          // Now refresh players data for each Match
          _.each( respTnmnt.events, function( respEvent ){
            
            var matchModel = tnmntModel.matches.get( respEvent.id );
            
            console.log( matchModel );
            console.log( respEvent.players );
            
            //console.log(respEvent.players);
            matchModel.players.set( respEvent.players );
            
            return false;
            
          });
            
        });
        
      }
      
    });

    // Module Exports
    return LiveScore;
    
  }
  
);