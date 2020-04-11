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




        const button =  ElementJS.getComponent(
                'mdcButtonRaised',
                {
                    id:"mybotton",
                    text:"hola",
                    onmouseenter:"console.log('aaaaaaa')"
                }
            )

        // load html base for panel
        //this.$el.prepend(ElementJS.getComponent("baseModal",{title:"ElementJson.js"}));


        this.$el.prepend( button().render() );
        // 
        new directive({el:this.el,mdc:mdc});

    },
    renderViewContent:function(){
        new this.viewContent({el:"#view-content"});
    }
    
});

return viewMain;

});