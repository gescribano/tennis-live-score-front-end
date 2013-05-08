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
        
        //TODO: this would be being fired many times, b/c I use SET to refresh the tournaments collection
        options.tournaments.on('add remove', function(){
          
          this.render();
          
        }, this);
        
      },
      
      serialize: function() {
        return {
          tournaments: this.options.tournaments
        };
      },
      
      events: {
        "change select": "tournamentSelected"
      },
      
      tournamentSelected: function(){
        var tournament = this.$el.find("select").val();
        //console.log( "Tournament selected: " + tournament );
      },
      
      afterRender: function() {
        
        this.$el.find("select").chosen({
          allow_single_deselect: true
        }).trigger("liszt:updated");

      },      

      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        //TODO: clean native event listeners?
      }

    });

    // Module Exports
    return TournamentSelectorView;

  }

);