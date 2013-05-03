define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  ],

  // Module Definition
  function (app, $, Backbone, _) {

    var DateSelectorView = Backbone.View.extend({
      
      template: 'date-selector',

      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
      }

    });

    // Module Exports
    return DateSelectorView;

  }

);