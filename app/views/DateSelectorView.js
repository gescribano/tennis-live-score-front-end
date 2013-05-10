define([
  // The App
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Assets
  'vendor/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom'
  ],

  // Module Definition
  function ( app, $, Backbone, _ ) {

    var DateSelectorView = Backbone.View.extend({
      
      template: 'date-selector',
      
      initialize: function( options ) {
        
        this.listenTo( this.model, 'change:date', this.modelDateChanged );
        
      },
      
      modelDateChanged: function(){
        
        var modelDateString = this.model.get('date');
        
        var currentSelectedDate = $.datepicker.formatDate( "yy-mm-dd", this.$el.find("input").datepicker( "getDate" ) );
        
        // Only update datepicker if the model date is different form current selected date
        if ( currentSelectedDate !== modelDateString ){
          // This should only happen on page load, or history changes
          
          var date = new Date();
          if ( modelDateString !== null )
            date = $.datepicker.parseDate( "yy-mm-dd", modelDateString );
          
          // Update datepickers popup selected date
          this.$el.find("input").datepicker( "setDate", date );
          
        }
        
      },
      
      afterRender: function() {
        
        // Apply Jquery date picker plugin
        this.$el.find("input").datepicker({
          showOn: "button",
          buttonImage: "/assets/img/calendar.gif",
          buttonImageOnly: true,
          dateFormat: 'M d, yy'
        });
        
      },
      
      events: {
        "change input": "newDateSelected"
      },
      
      newDateSelected: function(){
        var date = this.$el.find("input").datepicker( "getDate" );
        // Route to the new date
        app.router.goToDate( $.datepicker.formatDate( "yy-mm-dd", date ) );
      },
      
      cleanup: function() {
        // This is called after this.remove() and should be used to
        // cleanup event listeners, etc.
        
        this.model.off(null, null, this);
        
        //TODO: clean native event listeners?
      }

    });

    // Module Exports
    return DateSelectorView;

  }

);