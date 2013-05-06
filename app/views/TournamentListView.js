define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/TournamentItemView'
  ],

  // Module Definition
  function ( app, $, Backbone, _, TournamentItemView ) {

    var TournamentListView = Backbone.View.extend({
      
      className: "tournaments-wrapper",
      
      initialize: function( options ) {
        
        console.log( "TournamentListView.initialize" );
        
        //TODO: check what happens when removing tournaments, listen to remove?
        options.tournaments.on('add', function( model, collection, options ){
          
          console.log("Collection 'add' event fired with tournament: "+model.get('name'));
          
          this.insertView( new TournamentItemView({
            model: model
          })).render();
          
        }, this);
        
      },
      
      beforeRender: function() {

      },
      
      afterRender: function() {
        
      },      

      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
      }

    });

    // Module Exports
    return TournamentListView;

  }

);