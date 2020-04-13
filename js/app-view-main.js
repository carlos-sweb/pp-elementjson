define(
["backbone",
"jquery",
"underscore",
"ElementJS" ,
"elementjson-materialui",
"mdc" ,
"view-content",
"directive"],
function(Backbone,$,_ ,ElementJS , elementjsonMaterialui, mdc , viewContent,directive){

// Agregar los componentes registrados para
ElementJS.registerGroup( elementjsonMaterialui );

const viewMain =  Backbone.View.extend({
    /**
     * @function preinitialize
     */
    preinitialize:function(){

        this.directive = null

        this.viewContent = viewContent;


    },
    /**
     * initialize
     */
    initialize:function(){


        this.render();
        
    },
    /**
     *@function render
     */
    render:function(){

        // load html base for panel
        this.$el.prepend(
            ElementJS.getComponent("baseModal",
                {
                    title:"ElementJson.js"
                })().render()
        );

        this.directive = new directive({el:this.el,mdc:mdc});

    },
    renderViewContent:function(){

            console.log("Corriendo el contenido");

    }
    
});

return viewMain;

});