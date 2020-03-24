requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl:"",
	paths:{
		"alpine":"node_modules/alpinejs/dist/alpine",
		"jquery":"node_modules/zepto/dist/zepto.min",
		"backbone":"node_modules/backbone/backbone-min",
		"underscore":"node_modules/underscore/underscore-min",
		"config":"js/app-config"
	}
});

require(["alpine","jquery","backbone","underscore"],function(alpine,$,Backbone,_){
	
	console.log("Work");

	var Workspace = Backbone.Router.extend({
		initialize:function(){

			console.log("initialize");

		    Backbone.history.start();

		},

  routes: {
    "":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    	console.log("hola a todos");
  },

  search: function(query, page) {
   
  }

});


new Workspace();

	 


});