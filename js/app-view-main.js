define(
    ["backbone","jquery","underscore","ElementJS" , "elementjson-materialui","mdc"],
function(Backbone,$,_ ,ElementJS , elementjsonMaterialui,mdc){

const MDCTopAppBar= mdc.topAppBar.MDCTopAppBar;
    console.log(mdc.topAppBar.MDCTopAppBar);

// Agregar los componentes registrados para
ElementJS.registerGroup( elementjsonMaterialui );

const viewMain =  Backbone.View.extend({

    initialize:function(){

        this.render();

    },
    render:function(){
        this.$el.prepend(ElementJS.getComponent("baseModal",{title:"Makinita"}));
        const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        const topAppBar = new MDCTopAppBar(topAppBarElement);
        console.log(topAppBarElement);
    },
    events:{
        "click .material-icons":"open"
    },
    open:function(){
        alert("hola");
    }

});


return viewMain;

});