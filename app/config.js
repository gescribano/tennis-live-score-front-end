// Set the require.js configuration for your application.
require.config({

  //scriptType: 'text/javascript',

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["../vendor/jam/require.config", "main"],

  paths: {
    
    // Vendor path on assets
    assetsvendor: "../assets/vendor"
    
  },

  shim: {

    // Vendor plugins that depends on jQuery.
    "assetsvendor/chosen/chosen/chosen.jquery.min": ["jquery"],
    "assetsvendor/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom": ["jquery"]
    
  }

});
