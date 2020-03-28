define(
    [ "backbone" , "jquery" , "underscore" ],
    function( Backbone , $ , _ ){
    
    const viewContent =  Backbone.View.extend({
        preinitialize:function(){
    
        },
        initialize:function(){
            console.log(this);
            this.render();
        },
        render:function(){
            // load html base for panel
            this.$el.html("<h1>Content</h1>");
        }
    });
    
    return viewContent;
    
    });