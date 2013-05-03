define([
  // The app
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // The Model
  'models/Tournament'
  ],

  // Module Definition
  function ( app, $, _, Backbone, Tournament ){

    var Tournaments = Backbone.Collection.extend({
        
      model: Tournament
      
    });

    // Module Exports
    return Tournaments;
    
  }
  
);