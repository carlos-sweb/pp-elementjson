define([
	'./dist/elementjson-materialui/directive.js'
],function(directives){

/**
 * Crear una nueva directiva
 * @class
 */
class __directive{
    /**
     * @constructor
    */
    constructor(options){

        this.directives = directives;
        
        this.elInits = [];
        
        if( typeof options != 'undefined' || typeof options != 'null' ){

            this.run(options);
            
        };

    }
    /**
     * @function elInitsFind
     * @param id { string } - Id de la view que se desea buscar
     * @return { Backbone.View }
    */
    elInitsFind( id ){

      return this.elInits.filter( (elInit) => elInit.id == id  );
      
    }
    /**
    * @function elInitFindIndex
    * @param id { string } - Id de la view que se desea buscar
    * @return { number } 
    */
    elInitFindIndex( id ){

        let position = null; 

        for( var i = 0; i < this.elInits.length; i++ ){

            if( this.elInits[i].id == id ){

                position = i;

                break;
            }

        }

        return position;
        

    }
    /**
    * @function run
    * @param options { object } - 
    * @return 
    */
    run( options ){

        //console.log("Run ::::::");

        const El = options.el || null;
        
        const mdc = options.mdc || null;
        
        Object.entries(this.directives).forEach(function([key,value]){   


            
            if( typeof value.el != "undefined" ){
                
                const el = value.el;
                
                const view = value.view;
                
                const els = El.querySelectorAll( el )

                if( els.length > 0 ){

                    els.forEach((_els)=>{
                        
                        if( !(_els.getAttribute("id") == null) && !(_els.getAttribute("data-ci-init") == "true" )  ){

                            var existsId = this.elInitsFind(_els.getAttribute("id"));
                            // Se verifica que no este repetido el ID del
                            // Elemento
                            if( existsId == 0 ){ 

                                this.elInits.push( 
                                    new view( { 
                                        el : _els , 
                                        mdc :  mdc 
                                    } ) 
                                );
                                _els.setAttribute('data-ci-init','true');
                            }else{

                                
                                let position = this.elInitFindIndex( _els.getAttribute("id") )

                                if( !( position == null  ) ){

                                    this.elInits[position].off();
                                    this.elInits[position].stopListening();
                                    this.elInits[ position ] = null;
                                    this.elInits.splice( position , 1 );

                                    this.elInits.push(new view( { 
                                        el : _els , 
                                        mdc :  mdc 
                                    } ));
 
                                }
                                els.setAttribute('data-ci-init','true');
                                console.warn("Element ID #"+_els.getAttribute("id")+" duplicate");
                                
                            }
                            

                        }    
                    });

                }

            }

        }.bind(this));
        // -------------------------------------------------------------------------------        



        this.elInits.forEach((elInit)=>{

            //console.log( elInit );
            //console.log( elInit._listenTo );

            if( !_.isNull(elInit) ){
                if( typeof elInit._listenTo != "undefined" ){
                if( elInit._listenTo.length > 0 ){
                if( _.isFunction( elInit._listenTo.forEach ) ){     
                if( !(elInit.el.getAttribute('data-ci-listento') == 'ready') ){

                    elInit._listenTo.forEach((__listenTo)=>{
                        /**
                         * @const _name_function
                         * @type {string}
                         * @description 
                         */
                        const _name_function = __listenTo[0];
                        /**
                         * @const view_connect
                         * @type {string}
                         * @description
                         */
                        const view_connect =  __listenTo[1].split(":");
                        /**
                         * @const view_connect_id
                         * @type {string}
                         * @description
                         */
                        const view_connect_id = view_connect[0];
                        /**
                         * @const view_connect_event
                         * @type {string}
                         * @description
                         */
                        const view_connect_event = view_connect[1];
                        /**
                         *@var elInitsFind
                         *@type {array}
                         *@description
                         */
                        var elInitsFind = this.elInitsFind(view_connect_id);

                        // ---------------------------------------------------------
                        if( elInitsFind.length == 1 ){
                            if( _.isFunction( elInit[_name_function] ) ){                           


                                // Aqui -----------------------
                                
                                elInit.listenTo(
                                    elInitsFind[0],
                                    view_connect_event,
                                    elInit[_name_function].bind(elInit)
                                )


                                elInit.el.setAttribute('data-ci-listento','ready');
                                
                            }

                        }
                        // ---------------------------------------------------------
                    })
                    //console.log("----------------------------------------------");
                }    
                }    
                }
                }

            }

        })
        // -------------------------------------------------------------------------------

    }

}

return __directive;



});