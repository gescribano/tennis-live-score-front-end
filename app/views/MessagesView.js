define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash'
  ],

  // Module Definition
  function ( app, $, Backbone, _ ) {

    var MessagesView = Backbone.View.extend({
      
      template: 'messages',
      
      initialize: function( options ) {
        
        this.listenTo( this.model, 'change:fetch_error', this.render );
        
      },
      
      serialize: function(){
        
        var message = {
          text: '',
          error: false
        };
        
        if ( this.model.get("fetch_error") ){
          message.error = true;
          message.text = 'There was an error getting the results.';
        }
        console.log(message);
        return { 
          message: message 
        };
        
      },
      
      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        this.model.off(null, null, this);
      }

    });

    // Module Exports
    return MessagesView;

  }

);