requirejs.config({
    "paths": {
      "app": "app"
    },
    "jquery": "jquery",
    "shim": {
    	"owl.carousel": ['jquery'],
    	"jquery.fullpage" : ['jquery']
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
