define([
  'app',
  // The Model
  'models/Tournament'
  ],

  // Module Definition
  function ( app, Tournament ){

    var Tournaments = Backbone.Collection.extend({
        
      model: Tournament
      
    });

    // Module Exports
    return Tournaments;
    
  }
  
);