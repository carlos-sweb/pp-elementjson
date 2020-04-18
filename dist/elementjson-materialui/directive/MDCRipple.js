define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( backbone , _ , $ , helperDirective ){
    
    const classIden = '.ci-ripple';

    const viewMDCRipple = Backbone.View.extend(_.extend({
        preinitialize:function(){

            this.mdcEl = null;

        },
        initialize:function(options){

            this.id = this.getId( this.el )
           
            this._listenTo =  this.getListenTo( this.el )
            
            const Mdc = options.mdc || null;

            if( !_.isNull(Mdc) ){    

                    this.mdcEl = new Mdc.ripple.MDCRipple( this.el )  
                    this.mdcEl.unbounded = true;              
            }
           
            this.render();
            
        },
        render:function(){

        }
    }, helperDirective ));


    return {view:viewMDCRipple,el:classIden}

});