define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Sub-Views
  'views/player/ItemView'
  ],

  // Module Definition
  function ( app, $, Backbone, _, PlayerItemView ) {

    var MatchItemView = Backbone.View.extend({
      
      template: 'match-item',
      
      className: 'match',

      initialize: function( options ) {
        
        //TODO: check what happens when removing matches, listen to remove?
        options.model.players.on('add', function( model, collection, options ){
          
          //console.log( "adding player view to match: "+ this.model.get("id") );
          
          this.insertView( ".players", new PlayerItemView({
            model: model
          })); //.render();
          
        }, this);
        
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
      }

    });

    // Module Exports
    return MatchItemView;

  }

);