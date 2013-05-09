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
        
        options.tournaments.on('afterSet', function(){
          this.render();
        }, this);
        
      },
      
      serialize: function() {
        return {
          model: this.model,
          tournaments: this.options.tournaments
        };
      },
      
      events: {
        "change select": "tournamentSelected"
      },
      
      tournamentSelected: function(){
        var tournamentSlug = this.$el.find("select").val();
        // Route to the new tournament
        app.router.goToTournament( tournamentSlug );
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
        this.options.tournaments.off(null, null, this);
      }

    });

    // Module Exports
    return TournamentSelectorView;

  }

);