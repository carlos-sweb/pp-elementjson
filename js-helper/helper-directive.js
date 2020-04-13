define(function(){
    const helperDirecticve =  {    

        _listenTo:[],   
        /**
         * @function getId
         * @description - esta Funcion captura el id del elemento
         * para poder ser enlazado posteriormente
         */
        getId:function(){
            
            this.id = this.el.hasAttribute('id') ? this.el.getAttribute('id') : null;
             
        },
        // ----------------------------------------------------------------------------------
        /**
         * @function getListenTo
         * @description - consigue identificar los eventos que va escuchar desde otros iden
         */
        getListenTo:function(){

            if(  this.el.hasAttributes()  ){
               
                const attrs = this.el.attributes;
               
                for(var i = attrs.length - 1; i >= 0; i--) {


                    const regex = /^ci-listento\.([a-zA-Z]{0,})$/;

                    const str =  attrs[i].name;

                    let m;
                    
                    if ((m = regex.exec(str)) !== null) {
                        
                        if( _.isFunction( this[m[1]] ) ){

                            this[m[1]]
                            
                            this._listenTo.push( [m[1],attrs[i].value] );

                        }
                       

                    }

                }
               

            }

        }
        // ----------------------------------------------------------------------------------

    }

    return helperDirecticve;
});