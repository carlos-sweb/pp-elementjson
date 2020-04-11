define([ 'backbone' , 'underscore' , 'jquery' ],function( Backbone , _ , $ ){
    /**
     * @const classIden - clase de css que afectara a esta view
     */
    const classIden = '.mdc-button';

    const viewMDCButton = Backbone.View.extend({
        /**
         * @function initialize 
         */
        initialize:function(options){
            
            const Mdc = options.mdc || null;

            if( !_.isNull(Mdc) ){

                this.elMdc = new Mdc.ripple.MDCRipple( this.el );
                
            };

            /*Son las primeras pruebas de reactividad*/
            const acceptEvent = [
                'click',
                'dblclick',
                'mouseout',
                'mouseleave',
                'mouseenter'
            ];

            acceptEvent.forEach((event)=>{

                const attribute = "ci-"+event;

                if( this.el.hasAttribute(attribute) ){

                    const value = this.el.getAttribute(attribute);

                    if(  value != "" ){
                        /*
                        this.el.addEventListener(
                            event, 
                            new Function(" console.log(hola) ").bind(this,{algo:'hola'})
                        );
                        */
                    }


                };

            });
            
            this.render();
        },
        eventsemitter:function(event){

            /*
            *@const eventName
            *@description - Nombre del evento a escuchar
            */
            const eventName = event.type;

            const attribute = 'ci-'+eventName;

            if(  this.el.hasAttribute( attribute ) ){

                const value = this.el.getAttribute(attribute); 

                if( value != "" ){
                        console.log(this.el);
                        console.log(value);

                        new Function("console.log('hola a a toos')")();

                };
            };
    


        },
        /**
         * @function render
         */
        render:function(){
            
        }
    })
    
    return {view:viewMDCButton,el:classIden};
    
});