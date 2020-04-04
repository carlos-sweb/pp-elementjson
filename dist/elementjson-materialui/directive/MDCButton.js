define([ 'backbone' , 'underscore' , 'jquery' ],function( Backbone , _ , $ ){
    
    const viewMDCButton = Backbone.View.extend({
        /**
         * @function initialize 
         */
        initialize:function(options){
            
            const Mdc = options.mdc || null;

            if( !_.isNull(Mdc) ){

                this.elMdc = new Mdc.ripple.MDCRipple( this.el )
                
            };

            this.render();
        },
        /**
         * @function render
         */
        render:function(){
            console.log(this.$el);
        }
    })
    
    return {view:viewMDCButton,el:".mdc-button"};
    
});