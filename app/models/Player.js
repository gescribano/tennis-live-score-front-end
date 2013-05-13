define([
  'app'
  ],

  // Module Definition
  function ( app ){

    var Player = Backbone.Model.extend({

      defaults: {
        is_winner: false,
        is_serving: false,
        country: "",
        shirt: "",
        racket: "",
        shoes: "",
        url: "",
        seed: "",
        set_games: []
      }
      
    });

    // Module Exports
    return Player;
    
  }
  
);