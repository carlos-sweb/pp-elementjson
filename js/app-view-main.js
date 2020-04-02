define(
["backbone",
"jquery",
"underscore",
"ElementJS" ,
"elementjson-materialui",
"mdc" ,
"view-content"],
function(Backbone,$,_ ,ElementJS , elementjsonMaterialui, mdc , viewContent){

    

    let _menu = Backbone.View.extend({
        initialize:function(){
            this.render();
        },
        render:function(){
            console.log(this.$el);
        },
        open:function(){
            
        },
        close:function(){

        }
    });



    function dropdown() {
        return {
            show: false,
            open() { this.show = true },
            close() { this.show = false },
            isOpen() { return this.show === true },
            hello(){
                console.log("Hello from alpine");
            },
        }
    }

    window.dropdown = dropdown;

    


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

        new _menu({el:".mdc-menu"});

    },
    initialize:function(){


        this.render();
        
    },
    render:function(){
        /*
        document.addEventListener("MDCAutoInit:End", (events) => {
            console.log("Termino");
        });
        */


        // load html base for panel
        this.$el.prepend(ElementJS.getComponent("baseModal",{title:"ElementJson.js"}));
        // get element topAppBar
        const elementTopAppBar = this.$el.find(".mdc-top-app-bar").first();
        // create mdc element mdcTopAppBar
        if( elementTopAppBar.length != 0  ){

            this.menu = new this.MDCMenu(document.querySelector('.mdc-menu'));
            this.menu.open = false;
            console.log(this.menu);

            this.topAppBar  = new this.MDCTopAppBar(elementTopAppBar[0]);
            this.drawer     = this.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        
            this.topAppBar.listen("MDCTopAppBar:nav",this.close.bind(this));
        };
        

       mdc.autoInit();

      

    },
    events:{
        "click #button_language":"menu_language",
        "click .close-drawer":"close"
    },
    close:function(){
        this.drawer.open = !this.drawer.open;
    },
    menu_language:function(){
        //this.menu.open = true;
    },
    renderViewContent:function(){
        new this.viewContent({el:"#view-content"});
    }
    
});

return viewMain;

});