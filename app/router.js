define([
  // Application.
  "app",
  // Layout
  'views/layouts/MainLayout',
  // Views
  'views/DateSelectorView', 'views/TournamentSelectorView', 
  // Collections
  'collections/Tournaments', 
  // Models
  'models/LiveScore'
],

function( app, MainLayout, DateSelectorView, TournamentSelectorView, Tournaments, LiveScore ) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    initialize: function() {
      //TODO: parse JSON and fill data
      
      var tournaments = new Tournaments();
      
      // Ensure the app has references to the collections.
      _.extend(app, { tournaments: tournaments });
      
      // Use main layout and set Views.
      app.useLayout("main-layout").setViews({
        "#date-selector": new DateSelectorView(),
        "#tournament-selector": new TournamentSelectorView( { tournaments: tournaments } )
      }).render();
      
    },
    
    routes: {
      "": "index"
    },
    
    index: function() {
      
      this.fetch();
      
    },
    
    fetch: function() {
      
      var liveScore = new LiveScore({
        //TODO: pass args here depending on route / filters
      });
      
      // clearing the interval if it already exists
      window.clearInterval( window.lsIntervalId );
      
      // Set reload interval
      window.lsIntervalId = setInterval(function () {
          liveScore.fetch();
      }, 1000*10); //TODO: decrease the time to 10/15 seconds
      
      liveScore.fetch();
      
    }    
    
  });

  return Router;

});
