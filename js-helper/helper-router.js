define(["underscore"],function(_){
    const Helper = {
        /**
         * 
         * @param {string} state 
         * @param {array} state_accept 
         * @param {function} done 
         * @param {function} reject 
         */
        checkState:function( state , state_accept , done , reject ){
          const result = _.indexOf( state_accept , state );
          if( result != -1 ){
            if( _.isFunction(done) ){
              done(state);
            };
          }else{
            if( _.isFunction( reject ) ){
              reject(state);
            };
          };
        },
        /**
         * 
         * @param {string}   language 
         * @param {array}    language_accept 
         * @param {function} done 
         * @param {function} reject 
         */
        checkLanguage:function( language , language_accept , done , reject ){
          const result = _.indexOf( language_accept , language );
          if(  result != -1 ){
            if( _.isFunction( done ) ){
              done(language);
            };
          }else{
            if( _.isFunction( reject ) ){
              reject(language);  
            };
          };
        }
    };
    return Helper;
});