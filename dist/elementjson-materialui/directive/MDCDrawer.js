define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( Backbone , _ , $ , helperDirective ){
    /**
     * @const classIden - clase de css que afectara a esta view
     */
    const classIden = '.mdc-drawer';

    const viewMDCDrawer = Backbone.View.extend(_.extend({
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

            this.listenTo = [ ];


        },
        /**
         * @function initialize
         * @description 
         */
        initialize:function(options){
            
            this.getId()
           
            this.getListenTo();

            const Mdc = options.mdc || null;     

            if( !_.isNull(this.mdc) ){

                this.mdcEl = Mdc.drawer.MDCDrawer.attachTo(this.el);

            }
           
            this.render();

        },
        /**
         * @function change
         * @description
         */
        change:function(){

            if( !_.isNull( this.mdcEl ) ){

                this.mdcEl.open = !this.mdcEl.open;

            }

        },
        /**
         * @function close
         * @description
         */
        close:function(){
            
            if( !_.isNull(this.mdcEl) ){

                this.mdcEl.open = false;

            }
    
        },
        /**
         * @function open
         * @description
         */
        open:function(){

            
            if( !_.isNull(this.mdcEl) ){

                this.mdcEl.open = true;

            }

           

        },
        /**
         * @function render
         * @description
         */
        render:function(){

        }
        
    },helperDirective))

    return {view:viewMDCDrawer,el:classIden};


});