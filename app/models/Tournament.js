define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var Tournament = Backbone.Model.extend({
      
      idAttribute: 'slug',
      
      defaults: {
        type: '',
        location: '',
        name: '',
        surface: '',
        slug: '',
        //matches: New Matches()
      }
      
    });

    // Module Exports
    return Tournament;
    
  }
  
);