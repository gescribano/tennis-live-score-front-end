define([
  // Application.
  "app",
  // Layout
  'views/layouts/MainLayout',
  // Views
  //'views/MainContent'
],

function( app, MainLayout ) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    routes: {
      "": "index"
    },

    index: function() {

      var mainLayout = new MainLayout();
      
      mainLayout.render();

    }
    
  });

  return Router;

});
