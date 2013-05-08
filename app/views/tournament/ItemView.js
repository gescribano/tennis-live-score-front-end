define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/match/ItemView'
  ],

  // Module Definition
  function ( app, $, Backbone, _, MatchItemView ) {

    var TournamentItemView = Backbone.View.extend({
      
      template: 'tournament-item',

      initialize: function( options ) {
        
        this.model.matches.on('add', function( model, collection, options ){
          
          this.insertView( ".matches", new MatchItemView({
            model: model
          })).render();
          
        }, this);
        
        // TODO: THIS WAS REMOVING CHILD VIEWS, HOW TO HANDLE THIS?
        // this.model.on('change', function( model, options ){
          // console.log( 'Tournament changed: ' + model.id );
          // this.render();
        // }, this);
        
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