define([
  // The app
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // The Model
  'models/Match'
  ],

  // Module Definition
  function ( app, $, _, Backbone, Match ){

    var Matches = Backbone.Collection.extend({
        
      model: Match
      
    });

    // Module Exports
    return Matches;
    
  }
  
);