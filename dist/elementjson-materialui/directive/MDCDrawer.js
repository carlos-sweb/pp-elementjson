define(['backbone'],function(Backbone){

    const classIden = '.mdc-drawer';

    const viewMDCDrawer = Backbone.View.extend({
        /**
         * @function preinitialize
         * pre-initializando variables 
         * antes de usar
         */
        preinitialize:function(){

            this.Events = {};

            _.extend(this.Events, Backbone.Events);

            this.mdcEl = null;

            this.mdcEvents = [  ];


        },
        initialize:function(options){

            this.mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){

                //  this.mdcEl = new this.mdc.topAppBar.MDCTopAppBar( this.el )

                this.mdcEl = this.mdc.drawer.MDCDrawer.attachTo(this.el);

            }
           
            this.render();

        },
        close:function(){
            
            if( !_.isNull(this.mdcEl) ){

                this.mdcEl.open = false;

            }
    
        },
        open:function(){

            if( !_.isNull(this.mdcEl) ){

                this.mdcEl.open = true;

            }

        }
        
    })

    return {view:viewMDCDrawer,el:classIden};


});