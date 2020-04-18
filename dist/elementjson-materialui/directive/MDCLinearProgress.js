define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-linear-progress';

    const viewMDCLinearProgress = Backbone.View.extend(_.extend({
        preinitialize:function(){

            this.mdcEl = null;

        },
        initialize:function(options){

            this.id = this.getId( this.el )
           
            this._listenTo =  this.getListenTo( this.el )
            
            const Mdc = options.mdc || null;

            if( !_.isNull(Mdc) ){            	

                    this.mdcEl = new Mdc.linearProgress.MDCLinearProgress( this.el );

                	// Problemas para definir el buffer
                	// problemas para determinal otros attributos

            }
           
            this.render();
            
        },
        render:function(){

        }
    }, helperDirective ));


    return {view:viewMDCLinearProgress,el:classIden}

});