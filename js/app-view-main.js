define(
["backbone","jquery","underscore","ElementJS" , "elementjson-materialui","mdc" , "view-content","alpine"],
function(Backbone,$,_ ,ElementJS , elementjsonMaterialui, mdc , viewContent ,alpine){


console.log(alpine);

// Agregar los componentes registrados para
ElementJS.registerGroup( elementjsonMaterialui );

const viewMain =  Backbone.View.extend({
    preinitialize:function(){
        this.MDCDrawer    = mdc.drawer.MDCDrawer;    
        this.MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
        this.MDCList      = mdc.list.MDCList;
        this.MDCMenu      = mdc.menu.MDCMenu;
        this.MDCRipple     = mdc.ripple.MDCRipple;
        this.viewContent = viewContent;
    },
    initialize:function(){

        
 
      
        this.render();
        
    },
    beforeRender:function(){
        console.log("beforeRender");
    },
    afterRender:function(){
        console.log("afterRender");
    },
    render:function(){

        const mdcButton = ElementJS.getComponent('mdcButton',{"text":"hola"}); 

        this.$el.prepend(mdcButton);


        mdc.autoInit();

        /*
        // load html base for panel
        this.$el.prepend(ElementJS.getComponent("baseModal",{title:"ElementJson.js"}));
        // get element topAppBar
        const elementTopAppBar = this.$el.find(".mdc-top-app-bar").first();
        // create mdc element mdcTopAppBar
        if( elementTopAppBar.length != 0  ){

            this.menu = new this.MDCMenu(document.querySelector('.mdc-menu'));
            

            this.topAppBar  = new this.MDCTopAppBar(elementTopAppBar[0]);
            this.drawer     = this.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
            this.list = this.MDCList.attachTo(document.querySelector('.mdc-list'));
            this.list.wrapFocus = true;
            this.topAppBar.listen("MDCTopAppBar:nav",this.close.bind(this));
        };
        */

    },
    events:{
        "click #button_language":"menu_language",
        "click .close-drawer":"close"
    },
    close:function(){
        this.drawer.open = !this.drawer.open;
    },
    menu_language:function(){
        this.menu.open = true;
    },
    renderViewContent:function(){
        new this.viewContent({el:"#view-content"});
    }
    
});

return viewMain;

});