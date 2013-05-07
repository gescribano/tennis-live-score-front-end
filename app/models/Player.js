define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone'
  ],

  // Module Definition
  function (app, $, _, Backbone){

    var Player = Backbone.Model.extend({

      defaults: {
        is_winner: false,
        is_serving: false,
        country: "",
        shirt: "",
        racket: "",
        shoes: "",
        set_games: new Array()
      }
      
    });

    // Module Exports
    return Player;
    
  }
  
);