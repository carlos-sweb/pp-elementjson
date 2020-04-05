define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-icon-button';

    const viewMDCIconbutton = Backbone.View.extend(_.extend({
        preinitialize:function(){

            this.Events = {};

            _.extend( this.Events , Backbone.Events )

            this.mdcEl = null;

            this.mdcEvents = [  ];

            this.listenTo = [ ]; 
        },
        initialize:function(options){

            this.getId()
           
            this.getListenTo();
            
            const Mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){

                if( !this.$el.hasClass( 'mdc-top-app-bar__action-item' ) ){

                    this.mdcEl = new Mdc.ripple.MDCRipple( this.el )

                }
            }

            this.$el.on( "click" ,( event )=>{

                this.Events.trigger( "click" , event );

            });
           
            this.render();


        },
        render:function(){

        }
    },helperDirective));


    return {view:viewMDCIconbutton,el:classIden}

});