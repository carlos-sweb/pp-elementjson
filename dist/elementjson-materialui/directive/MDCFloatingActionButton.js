define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-fab';

    const MDCFloatingActionButton = Backbone.View.extend(_.extend({
        preinitialize:function(){

            this.mdcEl = null;

        },
        initialize:function(options){

            this.id = this.getId( this.el )
           
            this._listenTo =  this.getListenTo( this.el )
            
            const Mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){                

                    this.mdcEl = new Mdc.ripple.MDCRipple( this.el )                
            }

            this.$el.on( "click" ,( event )=>{

                this.trigger( "click" , event );   

            });
           
            this.render();
            
        },
        render:function(){

        }
    }, helperDirective ));


    return {view:MDCFloatingActionButton,el:classIden}

});