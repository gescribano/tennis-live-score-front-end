define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // Related Collections
  'collections/Matches'
  ],

  // Module Definition
  function ( app, $, _, Backbone, Matches ){

    var Tournament = Backbone.Model.extend({
      
      defaults: {
        type: '',
        location: '',
        name: '',
        surface: '',
        slug: '',
      },
      
      constructor: function() {
        this.matches = new Matches();
        Backbone.Model.apply( this, arguments );
      }
      
    });

    // Module Exports
    return Tournament;
    
  }
  
);