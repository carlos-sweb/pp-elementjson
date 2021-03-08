
/*!!
 * Power Panel Model <https://github.com/carlos-sweb/pp-model>
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @version 1.0.1 (2020/02/28 09:40 AM)
 * Released under the MIT License
 */
(function(global , factory ){
  	
  	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  	
  	typeof define === 'function' && define.amd ? define('ElementJs', factory) :
	
	(global = global || self, (function () {
        
    var exports = global.ElementJs = factory();    

	}()
	
));

})( this,(function() {


	return function(preOptions){

		var preOptions = preOptions || {};
		
		return function( options ){

			this.html = "";

			this.defaultTag = "div";			

			//--------------------------------------------------------
			this.load = function( htmljson ){

				if(htmljson.hasOwnProperty("length") && typeof htmljson.forEach == "function"){

					console.log("Es un puto array");

				}else{

					console.log("Es un puto Json");					

				}
			}
			//--------------------------------------------------------

		}


	}


//-----------------------------------------------------------------------------
}));