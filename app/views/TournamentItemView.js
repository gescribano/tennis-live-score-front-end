define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/MatchItemView',
  ],

  // Module Definition
  function ( app, $, Backbone, _, MatchItemView ) {

    var TournamentItemView = Backbone.View.extend({
      
      template: 'tournament-item',

      initialize: function( options ) {
        
        console.log( "TournamentItemView.initialize" );
        
        //TODO: check what happens when removing matches, listen to remove?
        options.model.get('matches').on('add', function( model, collection, options ){
          
          // THIS IS BEING FIRED TWICE FOR EACH MATCHES COLLECTION ! 
          // LISTENING TO A PROTOTYPE EVENT RATHER THAN AN INSTANCE EVENT ?
          
          console.log("Collection 'add' event fired with match: " + model.cid );
          //console.log( collection.length );

          this.insertView( ".matches", new MatchItemView({
            model: model
          })).render();
          
        }, this);
        
      },

      serialize: function() {
        return { 
          model: this.model 
        };
      },
      
      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        //this.model.get('matches').off(null, null, this);
      }

    });

    // Module Exports
    return TournamentItemView;

  }

);