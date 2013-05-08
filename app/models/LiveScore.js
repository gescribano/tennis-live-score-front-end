define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // Assets
  'vendor/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var LiveScore = Backbone.Model.extend({
      
      initialize: function( options ) {

        this.options = options;
      
      },
      
      fetchHandler: {
        
        success: function(model, resp) {
          // Do nothing
        },
        error: function(model, resp) {
          alert('Error getting data');
        }
        
      },      
      
      fetchData: function(){
        
        this.fetch( this.fetchHandler );
        
      },
            
      url: function(){
        
        var now = new Date();
        
        var date = $.datepicker.formatDate( "yy-mm-dd", now );
        if ( this.options.date !== undefined ){
          date = this.options.date;
        }
        
        // TODO: change this when integrating
        return "/app/"+date+"_livescore.json?v="+ now.getHours() + now.getMinutes() + now.getSeconds(); 
        
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
            matchModel.players.set( respEvent.players );
            
          });
            
        });
        
      }
      
    });

    // Module Exports
    return LiveScore;
    
  }
  
);