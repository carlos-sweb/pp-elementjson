define(
["backbone","jquery","underscore","ElementJS" , "elementjson-materialui","mdc"],
function(Backbone,$,_ ,ElementJS , elementjsonMaterialui,mdc){






// Agregar los componentes registrados para
ElementJS.registerGroup( elementjsonMaterialui );

const viewMain =  Backbone.View.extend({
    preinitialize:function(){

        this.MDCDrawer    = mdc.drawer.MDCDrawer;    
        this.MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
        this.MDCList      = mdc.list.MDCList;
    },
    initialize:function(){
        console.log("aaaaaaaaaaaaaaaa");
        this.render();
    },
    render:function(){
        // load html base for panel
        this.$el.prepend(ElementJS.getComponent("baseModal",{title:"ElementJson.js"}));
        // get element topAppBar
        const elementTopAppBar = this.$el.find(".mdc-top-app-bar").first();
        // create mdc element mdcTopAppBar
        if( elementTopAppBar.length != 0  ){

            this.topAppBar  = new this.MDCTopAppBar(elementTopAppBar[0]);
            this.drawer     = this.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
            this.list = this.MDCList.attachTo(document.querySelector('.mdc-list'));
            this.list.wrapFocus = true;
            this.topAppBar.listen("MDCTopAppBar:nav",this.close.bind(this));
        };
    },
    events:{
        "click .mdc-list-item":"close"
    },
    close:function(){
        this.drawer.open = !this.drawer.open;
    }
    
});

return viewMain;

});