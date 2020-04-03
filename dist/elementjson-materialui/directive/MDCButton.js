define(['backbone'],function(Backbone){
    
    const viewMDCButton = Backbone.View.extend({
        el:".mdc-button",
        initialize:function(a){
            console.log(a);
            this.render();
        },
        render:function(){
            console.log(this.$el);
        }
    })

    return {view:viewMDCButton,el:".mdc-button"};
    
});