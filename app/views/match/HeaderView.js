define([
  'app'
  ],

  // Module Definition
  function ( app ) {

    var MatchHeaderView = Backbone.View.extend({
      
      tagName: 'span',
      
      template: 'match-item-header',

      initialize: function( options ) {

        this.model.on('change:status change:round', function( model, options ){
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
    return MatchHeaderView;

  }

);