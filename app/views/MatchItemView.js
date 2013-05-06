define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  ],

  // Module Definition
  function ( app, $, Backbone, _ ) {

    var MatchItemView = Backbone.View.extend({
      
      template: 'match-item',
      
      className: 'match',

      serialize: function() {
        return { 
          model: this.model 
        };
      },

      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
      }

    });

    // Module Exports
    return MatchItemView;

  }

);