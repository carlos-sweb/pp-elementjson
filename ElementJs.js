
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
			// https://www.w3schools.com/tags/ref_byfunc.asp
			// listar y categorizar
			this.tag = {
				'<!DOCTYPE>':'',
				'html':'',
				'head':'',
				'title':'',
				'body':'',
				'h1':'',
				'h2':'',
				'h3':'',
				'h4':'',
				'h5':'',
				'h6':'',
				'p':'',
				'br':'',
				'hr':'',
				'<!--...-->':'',

				'abbr':'',
				'address':'',
				'b':'',
				'bdi':'',
				'bdo':'',
				'blockquote':'',
				'cite':'',
				'code':'',
				'del':'',
				'dfn':'',
				'em':'',
				'i':'',
				'ins':'',
				'kbd':'',
				'mark':'',
				'meter':'',
				'pre':'',
				'progress':'',
				'q':'',

				'rp':'',
				'rt':'',
				'ruby':'',
				's':'',
				'samp':'',
				'small':'',
				'strong':'',
				'sub':'',
				'sup':'',
				'template':'',
				'time':'',
				'u':'',
				'var':'',
				'wbr':'',



				'form':'',
				'input':'',
				'textarea':'',
				'button':'',
				'select':'',
				'optgroup':'',
				'option':'',
				'label':'',
				'fieldset':'',
				'legend':'',
				'datalist':'',
				'output':'',

				'iframe':'',
			}

			/*
			*@options
			*@desc contiene las variables basicacas para arrancar 
			*el render del string html
			*/
			this.options = options == null || options == undefined ? {} :  options ;			
			/**
			*@var html 
			*@desc : Contendor del codigo html de forma de un string
			*/
			this.html = "";

			this.structureJson = null;
			/*
			*@var defaultTag
			*@desc : Cuando no se describe el valor tag se toma este valor como prederminado
			*/
			this.defaultTag = "div";					
			//--------------------------------------------------------
			this.load = function( htmljson ){

				if(htmljson.hasOwnProperty("length") && typeof htmljson.forEach == "function"){

					this.structureJson = htmljson;

				}else{

					this.structureJson = [htmljson];					

				}
			}
			//--------------------------------------------------------

			this.render = function( htmljson ){

				var htmljson = htmljson == null || htmljson == undefined ? this.structureJson : htmljson;
				
				var output = "";

				htmljson.forEach(( elemDom )=>{
					output = this.element( elemDom );
				});

				return output;
			}
			//--------------------------------------------------------

			this.element = function( elemDom ){

				var base = "<$tag $attributes>$childrens</$tag>";

				var tag  = elemDom.hasOwnProperty('tag') ? elemDom['tag'] : this.defaultTag;

				var attr = elemDom.hasOwnProperty('attr') ? elemDom['attr'] : {};

				base = base.replace("<$tag","<"+tag).replace("</$tag","</"+tag);

				return base; 

			}


		}


	}


//-----------------------------------------------------------------------------
}));