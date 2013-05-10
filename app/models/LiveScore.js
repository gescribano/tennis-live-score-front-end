define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // Assets
  'assetsvendor/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var LiveScore = Backbone.Model.extend({
      
      initialize: function() {

        this.listenTo( this, 'change:date', this.fetchData );
        this.listenTo( this, 'change:tournamentSlug', this.filterTournaments );
        
      },
      
      filterTournaments: function(){
        
        // When tournament slug changes, update each tournament model visible attribute

        // Check if the tournament selected exists in our current collection         
        var tournamentExists = app.tournaments.findWhere({ slug: this.get('tournamentSlug') }) !== undefined; 
        
        app.tournaments.each(function( tournament, index, list ){
          if ( this.get('tournamentSlug') !== null ){
            // There is a tournament selected
            if ( tournamentExists )
              tournament.set( "visible", this.get('tournamentSlug') == tournament.get('slug') );
            else
              tournament.set( "visible", true );
          } else {
            // No tournament selected, show all
            tournament.set( "visible", true );
          }
        }, this);
        
      },
      
      fetchData: function(){
        
        this.fetch({
          success: function( model, resp ) {
            model.set("fetch_error", false);
          },
          error: function( model, resp ) {
            model.set("fetch_error", true);
          }
        });
        
        // clearing the timeout if it already exists
        window.clearTimeout( window.lsTimeoutId );
        
        // Set reload interval
        window.lsTimeoutId = setTimeout( _.bind( this.fetchData, this ), 1000*15 ); 
        //TODO: decrease the time to 10/15 seconds        
        
      },
            
      url: function(){
        
        var now = new Date();
        
        var date = $.datepicker.formatDate( "yy-mm-dd", now );
        if ( this.get('date') !== null ){
          date = this.get('date');
        }
        
        // TODO: change this path when integrating
        return "/app/"+date+"_livescore.json?v="+ now.getHours() + now.getMinutes() + now.getSeconds(); 
        
      },
      
      parse: function( response, options ){
        
        // Refresh tournament data
        app.tournaments.set( response.tournaments );
        
        app.tournaments.trigger('afterSet');
        
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
        
        // Call the tournament filter to ensure show/hide toggle
        this.filterTournaments();
        
      }
      
    });

    // Module Exports
    return LiveScore;
    
  }
  
);