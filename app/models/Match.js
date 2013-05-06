define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var Match = Backbone.Model.extend({

      defaults: {
        status: "",
        duration: "",
        gender: "",
        round: ""
        //players: New Players()
      }
      
    });

    // Module Exports
    return Match;
    
  }
  
);