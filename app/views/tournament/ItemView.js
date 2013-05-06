define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/match/ItemView',
  ],

  // Module Definition
  function ( app, $, Backbone, _, MatchItemView ) {

    var TournamentItemView = Backbone.View.extend({
      
      template: 'tournament-item',

      initialize: function( options ) {
        
        //TODO: check what happens when removing matches, listen to remove?
        options.model.matches.on('add', function( model, collection, options ){
          
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
        this.options.model.matches.off(null, null, this);
      }

    });

    // Module Exports
    return TournamentItemView;

  }

);