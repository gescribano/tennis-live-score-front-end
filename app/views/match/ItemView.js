define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/player/ItemView', 'views/match/HeaderView'
  ],

  // Module Definition
  function ( app, $, Backbone, _, PlayerItemView, MatchHeaderView ) {

    var MatchItemView = Backbone.View.extend({
      
      template: 'match-item',
      
      className: 'match',

      initialize: function( options ) {
        
        // Child view for header update
        this.setViews({
          ".header": new MatchHeaderView({ model: this.model })
        });
        
        options.model.players.on('add', function( model, collection, options ){
          
          this.insertView( ".players", new PlayerItemView({
            model: model
          })).render();
          
        }, this);
        
        options.model.players.on('remove', function( model, collection, options ){
          // The removal is handled on the Player ItemView
          model.trigger('removed');
        }, this);
        
        //When the Match is removed from the collection
        this.listenTo(this.model, 'removed', this.remove);
        
      },
      
      afterRender: function() {
        //console.log( this.views );
      },

      serialize: function() {
        return { 
          model: this.model
        };
      },

      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        this.options.model.players.off(null, null, this);
        this.model.off(null, null, this);
      }

    });

    // Module Exports
    return MatchItemView;

  }

);