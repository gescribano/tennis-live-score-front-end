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
      
      idAttribute: 'slug',
      
      defaults: {
        type: '',
        location: '',
        name: '',
        surface: '',
        slug: '',
        matches: new Matches()
      }
      
    });

    // Module Exports
    return Tournament;
    
  }
  
);