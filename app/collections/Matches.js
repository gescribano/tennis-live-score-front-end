define([
  'app',
  // The Model
  'models/Match'
  ],

  // Module Definition
  function ( app, Match ){

    var Matches = Backbone.Collection.extend({
        
      model: Match
      
    });

    // Module Exports
    return Matches;
    
  }
  
);