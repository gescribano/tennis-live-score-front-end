define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Assets
  'vendor/chosen/chosen/chosen.jquery.min'
  ],

  // Module Definition
  function ( app, $, Backbone, _ ) {

    var TournamentSelectorView = Backbone.View.extend({
      
      template: 'tournament-selector',
      
      initialize: function( options ) {
        
        options.tournaments.on('reset', function(){
          
          this.render();
          
        }, this);
        
      },
      
      serialize: function() {
        //console.log( 'serialize' );
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
        
        //console.log('afterRender');

        this.$el.find("select").chosen({
          allow_single_deselect: true
        }).trigger("liszt:updated");

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