requirejs.config({
    "baseUrl": "assets/js/lib",
    "paths": {
      "app": "../app"
    },
    "jquery": "jquery"
});

// Load the main app module to start the app
requirejs(["app/main"]);