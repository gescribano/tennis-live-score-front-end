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
      
      var liveScore = new LiveScore();
      this.liveScore = liveScore;
      
      var tournaments = new Tournaments();
      // Ensure the app has references to the main Tournament collection
      _.extend(app, { tournaments: tournaments });

      // Use main layout and set Views.
      app.useLayout("main-layout").setViews({
        "#date-selector": new DateSelectorView({ model: liveScore }),
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
      
      this.liveScore.clear();
      this.liveScore.fetchData();
      
    },

    showByDate: function( date ) {
      
      this.liveScore.set("date", date );
      this.liveScore.fetchData();
      
    }
    
  });

  return Router;

});
