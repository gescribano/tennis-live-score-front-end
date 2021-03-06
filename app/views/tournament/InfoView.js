define([
  'app'
  ],

  // Module Definition
  function ( app ) {

    var TournamentInfoView = Backbone.View.extend({
      
      tagName: 'span',
      
      template: 'tournament-item-info',

      initialize: function( options ) {

        this.model.on('change:location change:surface', function( model, options ){
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
    return TournamentInfoView;

  }

);