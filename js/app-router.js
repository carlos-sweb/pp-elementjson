define(
["backbone" , "underscore" , "jquery"  , "view-main" ,  "helper-router"  ],
function( Backbone , _ , $ , viewMain , Helper , ){



let Router = Backbone.Router.extend({
    preinitialize:function(){

      var userLang = navigator.language || navigator.userLanguage;

      console.log("El Lenguague del navegador: " + userLang);

      //https://www.w3schools.com/tags/ref_language_codes.asp
      this.helper           = Helper;
      this.language_active  = null;
      this.language_accept  = ["es","en","pt"];
      this.language_default = ["es"];

      this.state_accept = ["home","guide","install"];
      
    },
    initialize:function(){
      this.viewMain = new viewMain({el:"body"});
  	  Backbone.history.start();

  	},
    routes: {
      ":language/(:state)": "page",
      '*noFound':'noFound'
    },
    /**
     * @function
     * @param {string} language 
     * @param {string} state 
     */
    page : function( language , state ) {

      this.helper.checkLanguage( language , this.language_accept , ()=>{
        
        this.language_active = language;
        
        this.helper.checkState(state,this.state_accept,()=>{
          
          this.viewMain.renderViewContent(state);

        },this.noFound.bind(this));
      
      }, this.noFound.bind(this) );
        
    },
    /**
     * 
     * @param {string} language 
     * @param {string} state 
     */
    noFound:function(language,state){
      const _language =  this.language_active == null ? this.language_default : this.language_active;
      this.navigate("#/"+_language+"/home");
    }
});

return Router;

});