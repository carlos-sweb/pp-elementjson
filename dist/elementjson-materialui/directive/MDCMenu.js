define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( Backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-menu';

    const viewMDCMenu = Backbone.View.extend(_.extend({
        /**
         * @function preinitialize
         * @description 
         */
        preinitialize:function(){
            
            
            this.Events = {};

            _.extend( this.Events , Backbone.Events )

            this.mdcEl = null;

            this.mdcEvents = [ ];

            this.listenTo = []; 

        },
        initialize:function(options){

            this.getId()
           
            this.getListenTo();
            
            const Mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){

                this.mdcEl = new Mdc.menu.MDCMenu( this.el )
            }
           
            this.render();

        },
        /**
         * @function render
         * @description 
         */
        render:function(){

        },
        open:function(){
            
            if(  this.mdcEl  ){

                if( !_.isUndefined(this.mdcEl.open) ){

                    this.mdcEl.open = true;

                }

            }
        }

    },helperDirective));

    return {view:viewMDCMenu,el:classIden};
    
});