define([
  // The app
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // The Model
  'models/Player'
  ],

  // Module Definition
  function ( app, $, _, Backbone, Player ){

    var Players = Backbone.Collection.extend({
        
      model: Player
      
    });

    // Module Exports
    return Players;
    
  }
  
);