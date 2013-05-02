define([
  // The app
  'app',
  // Dependencies
  'jquery', 'backbone', 'lodash',
  // Plugin
  'backbone.layoutmanager'
  ],

  // Module Definition
  function (app, $, Backbone, _) {

    var MainLayout = Backbone.Layout.extend({
      el: '#main', // TODO: Change this when integrating with live site
      template: 'main-layout'
    })

    // Module Exports
    return MainLayout;

  }

);