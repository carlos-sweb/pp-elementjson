define(["backbone","jquery","_","language"],function(Backbone,$,_,language){

    console.log(language);

var View = Backbone.View.extend({
    template:_.template("<h1>Template Base</h1>"),
    initialize:function(){

        this.render();
    },
    render:function(){
        $this.$el.html("<h1>Template Base</h1>");
    }
});



});