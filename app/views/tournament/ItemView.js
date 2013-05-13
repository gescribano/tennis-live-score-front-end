define([
  'app',
  // Sub-Views
  'views/match/ItemView', 'views/tournament/TitleView', 'views/tournament/InfoView'
  ],

  // Module Definition
  function ( app, MatchItemView, TournamentTitleView, TournamentInfoView ) {

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
        
        this.model.matches.on('remove', function( model, collection, options ){
          // The removal is handled on the Match ItemView
          model.trigger("removed");
        }, this);
        
        //When the tournament is removed from the collection
        this.listenTo( this.model, 'removed', this.remove );
        
        this.listenTo( this.model, 'change:visible', this.toggleVisible );
        
      },
      
      toggleVisible: function(){
        
        this.$el.find(".tournament").toggleClass( 'hidden', !this.model.get("visible") );
        
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