define([
  'app',
  // Library Dependencies
  'jquery', 'lodash', 'backbone',
  // Related Collections
  'collections/Players'
  ],

  // Module Definition
  function ( app, $, _, Backbone, Players ){

    var Match = Backbone.Model.extend({

      defaults: {
        status: "",
        duration: "",
        round: "",
        head_to_head_url: ""
      },

      constructor: function() {
        this.players = new Players();
        Backbone.Model.apply( this, arguments );
      }
      
    });

    // Module Exports
    return Match;
    
  }
  
);