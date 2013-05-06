define([
  // The app
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // The Model
  'models/Player'
  ],

  // Module Definition
  function ( app, $, _, Backbone, Match ){

    var Players = Backbone.Collection.extend({
        
      model: Match
      
    });

    // Module Exports
    return Players;
    
  }
  
);