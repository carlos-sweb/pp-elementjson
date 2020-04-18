define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-icon-button';

    const viewMDCIconbutton = Backbone.View.extend(_.extend({
        preinitialize:function(){

            this.mdcEl = null;

        },
        initialize:function(options){

            this.id = this.getId( this.el )
           
            this._listenTo =  this.getListenTo( this.el )
            
            const Mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){

                if( !this.$el.hasClass( 'mdc-top-app-bar__action-item' ) ){

                    this.mdcEl = new Mdc.ripple.MDCRipple( this.el )

                    this.mdcEl.unbounded = true;

                }
            }

            this.$el.on( "click" ,( event )=>{

                this.trigger( "click" , event );      

            });
           
            this.render();
            
        },
        render:function(){

        }
    }, helperDirective ));


    return {view:viewMDCIconbutton,el:classIden}

});