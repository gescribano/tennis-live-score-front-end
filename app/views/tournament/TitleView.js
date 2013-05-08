define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash'
  ],

  // Module Definition
  function ( app, $, Backbone, _ ) {

    var TournamentTitleView = Backbone.View.extend({
      
      tagName: 'span',
      
      template: 'tournament-item-title',

      initialize: function( options ) {

        this.model.on('change:name', function( model, options ){
          this.render();
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
        this.model.off(null, null, this);
      }

    });

    // Module Exports
    return TournamentTitleView;

  }

);