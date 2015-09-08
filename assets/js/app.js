requirejs.config({
    "paths": {
      "app": "app"
    },
    "jquery": "jquery",
    "shim": {
    	"owl.carousel": ['jquery'],
    	"jquery.fullpage" : ['jquery'],
        "jquery.slimscroll": ['jquery']
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
