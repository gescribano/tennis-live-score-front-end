define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/match/ItemView',
  ],

  // Module Definition
  function ( app, $, Backbone, _, MatchItemView ) {

    var TournamentItemView = Backbone.View.extend({
      
      template: 'tournament-item',

      initialize: function( options ) {
        
        //TODO: check what happens when removing matches, listen to remove?
        this.model.matches.on('add', function( model, collection, options ){
          
          this.insertView( ".matches", new MatchItemView({
            model: model
          })); // .render();
          
        }, this);
        
      },
      
      events: {
        'click h2': 'expandCollapse',
        'click .toggle a': 'toggleListView',
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
        this.options.model.matches.off(null, null, this);
        
        //TODO: do I need to call undelegateEvents for native view events ?
      }

    });

    // Module Exports
    return TournamentItemView;

  }

);