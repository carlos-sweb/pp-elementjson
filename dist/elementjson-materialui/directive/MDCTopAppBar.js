define(['backbone'],function(Backbone){

    const viewMDCTopAppBar = Backbone.View.extend({
        initialize:function(options){
            
            console.log(options.mdc);

            console.log(this.$el);

            this.$el.on('click',()=>{
                alert("Click");
            })
        }
    })

    return {view:viewMDCTopAppBar,el:'.mdc-top-app-bar'};

});