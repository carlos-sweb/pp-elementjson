define([
    'backbone' , 'underscore' , 'jquery' ,'helper-directive'],
    function( Backbone , _ , $ , helperDirective ){
    /**
     * @const classIden - clase de css que afectara a esta view
     */
    const classIden = '.mdc-button';

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
           
            this._listenTo =  this.getListenTo( this.el )
            
            const Mdc = options.mdc || null;

            if( !_.isNull(Mdc) ){


                this.elMdc = new Mdc.ripple.MDCRipple( this.el );
                
            };

            this.el.addEventListener('click',()=>{
                this.trigger("click")
            });

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
        prueba:function(){


            this.el.classList.remove('mdc-button--raised');
            this.el.classList.add('mdc-button--outlined');
            console.log("Hola desde Prueba");
            console.log(this.el);
        },
        /**
         * @function render
         */
        render:function(){

            this.el.addEventListener("click",()=>{

                console.log("aaaa");

            });
            
        }
    },helperDirective))
    
    return {view:viewMDCButton,el:classIden};
    
});