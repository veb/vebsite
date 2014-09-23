requirejs.config({
    "baseUrl": "/assets/js/lib",
    "paths": {
      "app": "/assets/js/app"
    },
    "jquery": "jquery",
    "shim": {
    	"owl.carousel": ['jquery']
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);

