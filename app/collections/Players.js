define([
  'app',
  // The Model
  'models/Player'
  ],

  // Module Definition
  function ( app, Player ){

    var Players = Backbone.Collection.extend({
        
      model: Player
      
    });

    // Module Exports
    return Players;
    
  }
  
);