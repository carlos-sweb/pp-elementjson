define(
    ["backbone","jquery","underscore","ElementJS" , "elementjson-materialui"],
function(Backbone,$,_ ,ElementJS , elementjsonMaterialui){


// Agregar los componentes registrados para
ElementJS.registerGroup( elementjsonMaterialui );


const viewMain =  Backbone.View.extend({

    initialize:function(){

        $("body").prepend(
            ElementJS.getComponent("baseModal",{title:"Makinita"})
        );
    }

});


return viewMain;

});