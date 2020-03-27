define(
["backbone" , "underscore" , "jquery"  , "view-main" ],
function( Backbone , _ , $ , viewMain ){


let Router = Backbone.Router.extend({
    preinitialize:function(){
      //https://www.w3schools.com/tags/ref_language_codes.asp
      this.languague = ["es","en","pt"];
      
    },
    initialize:function(){

      new viewMain({el:"#body"});
  	  Backbone.history.start();

  	},
    routes: {
      ":languague": "page",
      '*noFound':'noFound'
    },
    page : function( languague ) {
      console.log("PAgegegege",languague);   
    },
    noFound:function(){
      console.log("NO Found ");
    }
});

return Router;

});