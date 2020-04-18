define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-dialog';

    const MDCDialog = Backbone.View.extend(_.extend({
        preinitialize:function(){

            this.mdcEl = null;

        },
        initialize:function(options){

            this.id = this.getId( this.el )
           
            this._listenTo =  this.getListenTo( this.el )
            
            const Mdc = options.mdc || null;

            if( !_.isNull(Mdc) ){  

                this.mdcEl = new Mdc.dialog.MDCDialog( this.el )                
            }

            this.render();
            
        },
        render:function(){

        },
        open:function(){

        	if( !_.isNull(this.mdcEl) ){

        		this.mdcEl.open();

        	}

        },
        close:function(){

        	if( !_.isNull(this.mdcEl) ){

        		this.mdcEl.close();

        	}

        }
    }, helperDirective ));


    return {view:MDCDialog,el:classIden}

});