define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash'
  ],

  // Module Definition
  function ( app, $, Backbone, _ ) {

    var PlayerItemView = Backbone.View.extend({
      
      template: 'player-item',
      
      className: 'player-wrapper',
      
      initialize: function( options ) {
        
        this.listenTo( this.model, 'change', this.render );
        
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
      }

    });

    // Module Exports
    return PlayerItemView;

  }

);