define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Assets
  'vendor/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom'
  ],

  // Module Definition
  function (app, $, Backbone, _) {

    var DateSelectorView = Backbone.View.extend({
      
      template: 'date-selector',

      afterRender: function() {
        
        this.$el.find("input").datepicker({
          showOn: "button",
          buttonImage: "/assets/img/calendar.gif",
          buttonImageOnly: true,
          dateFormat: 'M d, yy'
        }).datepicker( "setDate", new Date() );
        
      },
      
      events: {
        "change input": "dateSelected"
      },
      
      dateSelected: function(){
        var date = this.$el.find("input").datepicker( "getDate" );
        //console.log( "Date selected: " + date );
      },
      
      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
      }

    });

    // Module Exports
    return DateSelectorView;

  }

);