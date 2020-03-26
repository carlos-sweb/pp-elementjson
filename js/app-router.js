define(
["backbone" , "underscore" , "jquery" , "ElementJS" , "elementjson-materialui" , "view-main" ],
function( Backbone , _ , $ , ElementJS , elementjsonMaterialui, viewMain ){


let Router = Backbone.Router.extend({
    
    initialize:function(){

      new viewMain;
  	  Backbone.history.start();

  	},
    routes: {
      "": "home",
    },
    home: function() {
        
    }
});

return Router;

});