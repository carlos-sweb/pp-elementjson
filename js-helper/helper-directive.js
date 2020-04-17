define(function(){
    const helperDirective =  {    

        _listenTo:[],   
        /**
         * @function getId
         * @description - esta Funcion captura el id del elemento
         * para poder ser enlazado posteriormente
         */
        getId:function( elem ){
            
            return elem.getAttribute('id') || null;
             
        },
        // ----------------------------------------------------------------------------------
        /**
         * @function getListenTo
         * @description - consigue identificar los eventos que va escuchar desde otros iden
         */
        getListenTo:function(elem){

            let _listenTo = [];

            if( typeof elem != "undefined" ){
            if(  elem.hasAttributes()  ){
               
                const attrs = elem.attributes;
               
                for(var i = attrs.length - 1; i >= 0; i--) {

                    const regex = /^ci-listento\.([a-zA-Z]{0,})$/;

                    const str =  attrs[i].name;

                    let m;
                    
                    if ((m = regex.exec(str)) !== null) {
                        
                        //if( _.isFunction( this[m[1]] ) ){

                            
                            _listenTo.push( [m[1],attrs[i].value] );

                        //}
                       

                    }

                }
            }       
            }

            return _listenTo;

        

        }
        // ----------------------------------------------------------------------------------

    }

    return helperDirective;

});