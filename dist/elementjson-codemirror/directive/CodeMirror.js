define([
    'backbone' , 'underscore' , 'jquery' ,'helper-directive'],
    function( Backbone , _ , $ , helperDirective ){
    /**
     * @const classIden - clase de css que afectara a esta view
     */
    const classIden = '.code-mirror';

    const viewMDCButton =Backbone.View.extend(_.extend({
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
         */
        initialize:function(options){

            this.id = this.getId( this.el )
           
            this._listenTo =  this.getListenTo( this.el );
            
            this.render();
        },
        render:function(){

        }
    },helperDirective))
    
    return {view:viewMDCButton,el:classIden};
    
});