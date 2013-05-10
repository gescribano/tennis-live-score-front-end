define([
  // Application.
  "app",
  // Views
  'views/DateSelectorView', 'views/tournament/SelectorView', 'views/tournament/ListView', 'views/MessagesView', 
  // Collections
  'collections/Tournaments', 
  // Models
  'models/LiveScore'
],

function( app, DateSelectorView, TournamentSelectorView, TournamentListView, MessagesView, Tournaments, LiveScore ) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    initialize: function() {
      
      var liveScore = new LiveScore();
      this.liveScore = liveScore;
      
      var tournaments = new Tournaments();
      // Ensure the app has references to the main Tournament collection
      _.extend(app, { tournaments: tournaments });

      // Use main-layout and set Views.
      app.useLayout("main-layout").setViews({
        "#messages": new MessagesView({ model: liveScore }),
        "#date-selector": new DateSelectorView({ model: liveScore }),
        "#tournament-selector": new TournamentSelectorView( { tournaments: tournaments, model: liveScore } ),
        "#tournament-list": new TournamentListView( { tournaments: tournaments } )
      }).render();
      
    },

    // Shortcut for building a url.
    go: function() {
      return this.navigate( _.toArray(arguments).join("/"), true );
    },
    
    goToDate: function( date ){
      
      var destUrl = 'date/'+date;
      if ( this.liveScore.get("tournamentSlug") !== null ){
        destUrl += "/tournament/"+this.liveScore.get("tournamentSlug");
      }
      this.go( destUrl );
      
    },
    
    goToTournament: function( tournamentSlug ){
      
      var destUrl = '';
      if ( this.liveScore.get("date") !== null ){
        destUrl += "date/"+this.liveScore.get("date");
      }
      if ( tournamentSlug !== '' ){
        if ( destUrl !== '' ) destUrl += "/";
        destUrl += 'tournament/'+tournamentSlug;
      }
      this.go( destUrl );
      
    },
    
    routes: {
      "": "index",
      "date/:date": "showByDate",
      "tournament/:tournament_slug": "showByTournament",
      "date/:date/tournament/:tournament_slug": "showByTournamentAndDate"
    },
    
    index: function() {
      
      this.liveScore.set("date", null );
      this.liveScore.set("tournamentSlug", null );
      
    },

    showByDate: function( date ) {
      
      this.liveScore.set("date", date );
      this.liveScore.set("tournamentSlug", null );
      
    },
    
    showByTournament: function( tournamentSlug ) {

      this.liveScore.set("date", null );
      this.liveScore.set("tournamentSlug", tournamentSlug );
      
    },
    
    showByTournamentAndDate: function( date, tournamentSlug ) {

      this.liveScore.set("date", date );
      this.liveScore.set("tournamentSlug", tournamentSlug );
      
    }
    
  });

  return Router;

});
