// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["../vendor/jam/require.config", "main"],

  paths: {
    
    // Vendor path on assets
    vendor: "../assets/vendor",
    
  },

  shim: {

    // jQuery Chosen depends on jQuery.
    "vendor/chosen/chosen/chosen.jquery.min": ["jquery"]
    
  }

});
