define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  ],

  // Module Definition
  function (app, $, Backbone, _) {

    var TournamentSelectorView = Backbone.View.extend({
      
      template: 'tournament-selector',
      
      initialize: function( options ) {
        
        options.tournaments.on('reset', function(){
          this.render();
        }, this);
        
      },
      
      serialize: function() {
        return {
          tournaments: this.options.tournaments
        }
      },
      
      events: {
        "change select": "tournamentSelected"
      },
      
      tournamentSelected: function(){
        console.log("tournament changed");
      },
      
      afterRender: function() {
        
      },      

      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
      }

    });

    // Module Exports
    return TournamentSelectorView;

  }

);