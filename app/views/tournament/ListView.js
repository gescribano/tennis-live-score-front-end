define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/tournament/ItemView'
  ],

  // Module Definition
  function ( app, $, Backbone, _, TournamentItemView ) {

    var TournamentListView = Backbone.View.extend({
      
      className: "tournaments-wrapper",
      
      initialize: function( options ) {
        
        this.options.tournaments.on('add', function( model, collection, options ){
          
          this.insertView( new TournamentItemView({
            model: model
          })).render();
          
        }, this);
        
        this.options.tournaments.on('remove', function( model, collection, options ){
          // The removal is handled on the Tournament ItemView
          model.trigger("removed");
        }, this);
        
      },
      
      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        this.options.tournaments.off(null, null, this);
      }

    });

    // Module Exports
    return TournamentListView;

  }

);