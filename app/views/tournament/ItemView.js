define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/match/ItemView', 'views/tournament/TitleView', 'views/tournament/InfoView'
  ],

  // Module Definition
  function ( app, $, Backbone, _, MatchItemView, TournamentTitleView, TournamentInfoView ) {

    var TournamentItemView = Backbone.View.extend({
      
      template: 'tournament-item',

      initialize: function( options ) {
        
        // Child views related to tournament item title and info
        this.setViews({
          ".title": new TournamentTitleView({ model: this.model }),
          ".info": new TournamentInfoView({ model: this.model })
        });
        
        // When adding matches to the tournament collection, insert match views
        this.model.matches.on('add', function( model, collection, options ){
          
          this.insertView( ".matches", new MatchItemView({
            model: model
          })).render();
          
        }, this);
        
        
        this.listenTo(this.model, 'removed', this.remove);
        
        //TODO: this.listenTo(this.model, 'visible', this.toggleVisible);
        
      },
      
      events: {
        'click h2': 'expandCollapse',
        'click .toggle a': 'toggleListView'
      },      
      
      expandCollapse: function() {
        
        var $el = this.$el;
        
        if ( $el.find('.tournament').hasClass("expanded") ){
          $el.find('.content').slideUp(400, function(){
            $el.find('.tournament').removeClass("expanded");
          });
        } else {
          $el.find('.content').slideDown(400, function(){
            $el.find('.tournament').addClass("expanded");
          });
        }
        
      },

      toggleListView: function() {

        var $el = this.$el;
        
        if ( $el.find('.tournament').hasClass("boxed") ){
          $el.find('.tournament .content').fadeOut(400, function(){
            $el.find('.tournament').removeClass("boxed");
            $(this).fadeIn(400);
          });
        } else {
          $el.find('.tournament .content').fadeOut(400, function(){
            $el.find('.tournament').addClass("boxed");
            $(this).fadeIn(400);
          });
        }
      
        return false;
        
      },

      serialize: function() {
        return { 
          model: this.model 
        };
      },
      
      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        this.model.matches.off(null, null, this);
        this.model.off(null, null, this);
        
        //TODO: do I need to call undelegateEvents for native view events ?
      }

    });

    // Module Exports
    return TournamentItemView;

  }

);