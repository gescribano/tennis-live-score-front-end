define([
  'app'
  ],

  // Module Definition
  function ( app ) {

    var PlayerItemView = Backbone.View.extend({
      
      template: 'player-item',
      
      className: 'player-wrapper',
      
      initialize: function( options ) {
        
        this.listenTo( this.model, 'change', this.render );

        //When the Player is removed from the collection
        this.listenTo( this.model, 'removed', this.remove );
        
      },      

      serialize: function() {
        return { 
          model: this.model
        };
      },
      
      afterRender: function() {
        //console.log("PlayerItemView.afterRender");
      },

      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        this.model.off(null, null, this);
      }

    });

    // Module Exports
    return PlayerItemView;

  }

);