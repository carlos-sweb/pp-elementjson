define(["backbone","underscore","jquery"],function(Backbone,_,$){


  	var Workspace = Backbone.Router.extend({
  	initialize:function(){

  		  $("body").html("<h1 id='hola' >hola</h1>");

  	    Backbone.history.start();

  	},

  routes: {
    "":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    	
  },

  search: function(query, page) {
   
  }

});

		return Workspace;


});