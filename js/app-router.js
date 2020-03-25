define(
[
"backbone" , "underscore" , "jquery" , "ElementJS" , "elementjson-materialui" ],
function( Backbone , _ , $ , ElementJS , elementjsonMaterialui ){


console.log( elementjsonMaterialui  );

console.log(  );

ElementJS.registerGroup(elementjsonMaterialui);


console.log( ElementJS.getComponent("topAppBar",{text:"MyText"}) );

console.log( ElementJS.create(

 {"tag":"span","bc":"<%=text%>"}

))


console.log(ElementJS);



let Workspace = Backbone.Router.extend({
  	initialize:function(){

  		  $("body").prepend("<header class='mdc-top-app-bar mdc-elevation--z1 animated fadeIn' ><div class='mdc-top-app-bar__row'></div></header>");

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