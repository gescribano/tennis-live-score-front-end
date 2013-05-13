define([
  'app',
  // Related Collections
  'collections/Matches'
  ],

  // Module Definition
  function ( app, Matches ){

    var Tournament = Backbone.Model.extend({
      
      defaults: {
        type: '',
        location: '',
        name: '',
        surface: '',
        slug: '',
        visible: true
      },
      
      constructor: function() {
        this.matches = new Matches();
        Backbone.Model.apply( this, arguments );
      }
      
    });

    // Module Exports
    return Tournament;
    
  }
  
);