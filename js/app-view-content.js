define(
    [ "backbone" , "jquery" , "underscore" ],
    function( Backbone , $ , _ ){
    
    const viewContent =  Backbone.View.extend({
        preinitialize:function(){

            this.Events = {};

            _.extend(this.Events, Backbone.Events);
    
        },
        initialize:function(){
            this.render();
        },
        render:function(){
            // load html base for panel
            this.$el.html("<div class='col-xs center-xs' style='padding-top:40px;' > <button ci-listento.prueba=\"topAppBarMain:nav\" class='mdc-button mdc-button--raised' id='clickme' >  <span class='mdc-button__ripple'></span><span class='mdc-button__label'>Button</span></button> </div>");

            setTimeout( ()=> this.Events.trigger('ready') );

        }
    });
    
    return viewContent;
    
    });