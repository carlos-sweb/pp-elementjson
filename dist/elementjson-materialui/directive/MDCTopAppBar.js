define(['backbone','underscore','jquery'],function(Backbone,_,$){
    
    const classIden = '.mdc-top-app-bar';

    const viewMDCTopAppBar = Backbone.View.extend({
        /**
         * @function preinitialize
         * pre-initializando variables 
         * antes de usar
         */
        preinitialize:function(){

            this.Events = {};

            _.extend(this.Events, Backbone.Events);

            this.mdcEl = null;

            this.mdcEvents = [ "MDCTopAppBar:nav" ];

        },
        /**
         * @function initialize
         * cuando se inicialize la vista
         */
        initialize:function(options){
            
            this.mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){

                this.mdcEl = new this.mdc.topAppBar.MDCTopAppBar( this.el )

                this.mdcEl.listen( 'MDCTopAppBar:nav' , ( ) => {

                    this.Events.trigger( 'MDCTopAppBar:nav' );

                } );

            }
           
            this.render();

        },
        /**
         * @function render
         * function que renderiza el html y o atributos html
         */
        render:function(){


        }

    })

    return {view:viewMDCTopAppBar,el:classIden};

});