define([
  // Application.
  "app",
  // Layout
  'views/layouts/MainLayout',
  // Views
  'views/DateSelectorView', 'views/tournament/SelectorView', 'views/tournament/ListView', 
  // Collections
  'collections/Tournaments', 
  // Models
  'models/LiveScore'
],

function( app, MainLayout, DateSelectorView, TournamentSelectorView, TournamentListView, Tournaments, LiveScore ) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    initialize: function() {
      
      var tournaments = new Tournaments();
      //var liveScore = new LiveScore();
      
      // Ensure the app has references to the collections.
      _.extend(app, { tournaments: tournaments });

      // Use main layout and set Views.
      app.useLayout("main-layout").setViews({
        "#date-selector": new DateSelectorView({}),
        "#tournament-selector": new TournamentSelectorView( { tournaments: tournaments } ),
        "#tournament-list": new TournamentListView( { tournaments: tournaments } )
      }).render();
      
    },

    // Shortcut for building a url.
    go: function() {
      return this.navigate(_.toArray(arguments).join("/"), true);
    },
    
    routes: {
      "": "index",
      "date/:date": "showByDate"
    },
    
    index: function() {
      
      this.fetchScores();
      
    },

    showByDate: function( date ) {
      
      this.fetchScores( date );
      
    },
    
    fetchScores: function( date ) {
      
      var liveScore = new LiveScore({
        date: date
      });
      
      // clearing the interval if it already exists
      window.clearInterval( window.lsIntervalId );
      
      // Set reload interval
      window.lsIntervalId = setInterval(function () {
          liveScore.fetchData();
      }, 1000*500000); //TODO: decrease the time to 10/15 seconds
      
      liveScore.fetchData();
      
    }    
    
  });

  return Router;

});
