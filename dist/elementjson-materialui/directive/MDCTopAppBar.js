define(['backbone','underscore','jquery','helper-directive'],function( Backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-top-app-bar';

    const viewMDCTopAppBar = Backbone.View.extend(_.extend({
        /**
         * @function preinitialize
         * pre-initializando variables 
         * antes de usar
         */
        preinitialize:function(){

            this.mdcEl = null;

        },
        /**
         * @function initialize
         * cuando se inicialize la vista
         */
        initialize:function(options){

            this.getId()
           
            this.getListenTo();
            
            const Mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){

                this.mdcEl = new Mdc.topAppBar.MDCTopAppBar( this.el )

                this.mdcEl.listen( 'MDCTopAppBar:nav' , ( ) => {


                    this.trigger( 'nav' );

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

    },helperDirective))

    return {view:viewMDCTopAppBar,el:classIden};

});