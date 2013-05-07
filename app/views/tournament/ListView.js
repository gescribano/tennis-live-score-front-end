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
        
        //TODO: check what happens when removing tournaments, listen to remove?
        this.options.tournaments.on('add', function( model, collection, options ){
          
          var newView = this.insertView( new TournamentItemView({
            model: model
          })).render();
          
          // app.newViews.push( newView );
          
        }, this);
        
      },
      
      beforeRender: function() {

      },
      
      afterRender: function() {
        
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