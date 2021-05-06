
/*!!
 * Power Panel Model <https://github.com/carlos-sweb/pp-model>
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @version 1.0.0 (2020/02/28 09:40 AM)
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

			// https://www.w3schools.com/tags/ref_byfunc.asp
			//http://xahlee.info/js/html5_non-closing_tag.html
			// listar y categorizar
			//-----------------------------------------------------------------------------
			function tagOpt	(category){
				return {
					'category':category
				}
			}							
			//-----------------------------------------------------------------------------
			var tags = {
				'<!DOCTYPE>':tagOpt(['general','basic']),
				'html':tagOpt(['general','basic']),
				'head':tagOpt(['general','basic']),
				'title':tagOpt(['general','basic']),
				'body':tagOpt(['general','basic']),

				'h1':tagOpt('title'),
				'h2':tagOpt('title'),
				'h3':tagOpt('title'),
				'h4':tagOpt('title'),
				'h5':tagOpt('title'),
				'h6':tagOpt('title'),

				'p':tagOpt('text'),
				'br':tagOpt('text'),
				'hr':tagOpt('text'),
				'<!--...-->':tagOpt(['general','basic']),

				'abbr':tagOpt('formating'),
				'address':tagOpt('formating'),
				'b':tagOpt('formating'),
				'bdi':tagOpt('formating'),
				'bdo':tagOpt('formating'),
				'blockquote':tagOpt('formating'),
				'cite':tagOpt('formating'),
				'code':tagOpt('formating'),
				'del':tagOpt('formating'),
				'dfn':tagOpt('formating'),
				'em':tagOpt('formating'),
				'i':tagOpt('formating'),
				'ins':tagOpt('formating'),
				'kbd':tagOpt('formating'),
				'mark':tagOpt('formating'),
				'meter':tagOpt('formating'),
				'pre':tagOpt('formating'),
				'progress':tagOpt('formating'),
				'q':tagOpt('formating'),

				'rp':tagOpt('formating'),
				'rt':tagOpt('formating'),
				'ruby':tagOpt('formating'),
				's':tagOpt('formating'),
				'samp':tagOpt('formating'),
				'small':tagOpt('formating'),
				'strong':tagOpt('formating'),
				'sub':tagOpt('formating'),
				'sup':tagOpt('formating'),
				'template':tagOpt('formating'),
				'time':tagOpt('formating'),
				'u':tagOpt('formating'),
				'var':tagOpt('formating'),
				'wbr':tagOpt('formating'),


				'form':tagOpt('form'),
				'input':tagOpt('form'),
				'textarea':tagOpt('form'),
				'button':tagOpt('form'),
				'select':tagOpt('form'),
				'optgroup':tagOpt('form'),
				'option':tagOpt('form'),
				'label':tagOpt('form'),
				'fieldset':tagOpt('form'),
				'legend':tagOpt('form'),
				'datalist':tagOpt('form'),
				'output':tagOpt('form'),

				'iframe':tagOpt('frame'),


				'img':tagOpt('images'),
				'map':tagOpt('images'),
				'area':tagOpt('images'),
				'canvas':tagOpt('images'),
				'figcaption':tagOpt('images'),
				'figure':tagOpt('images'),
				'picture':tagOpt('images'),
				'svg':tagOpt('images'),

				'audio':tagOpt('audio/video'),
				'source':tagOpt('audio/video'),
				'track':tagOpt('audio/video'),
				'video':tagOpt('audio/video'),

				'a':tagOpt('link'),
				'link':tagOpt('link'),
				'nav':tagOpt('link'),


				'ul':tagOpt('list'),
				'ol':tagOpt('list'),
				'li':tagOpt('list'),
				'dl':tagOpt('list'),
				'dt':tagOpt('list'),
				'dd':tagOpt('list'),


				'table':tagOpt('table'),
				'caption':tagOpt('table'),
				'th':tagOpt('table'),
				'tr':tagOpt('table'),
				'td':tagOpt('table'),
				'thead':tagOpt('table'),
				'tbody':tagOpt('table'),
				'tfoot':tagOpt('table'),
				'col':tagOpt('table'),
				'colgroup':tagOpt('table'),

				'style':tagOpt('semantic'),
				'div':tagOpt('semantic'),
				'span':tagOpt('semantic'),
				'header':tagOpt('semantic'),
				'footer':tagOpt('semantic'),
				'main':tagOpt('semantic'),
				'section':tagOpt('semantic'),
				'article':tagOpt('semantic'),
				'aside':tagOpt('semantic'),
				'details':tagOpt('semantic'),
				'dialog':tagOpt('semantic'),
				'summary':tagOpt('semantic'),
				'data':tagOpt('semantic'),


				'head':tagOpt('meta/info'),
				'meta':tagOpt('meta/info'),
				'base':tagOpt('meta/info'),

				'script':tagOpt('programing'),
				'noscript':tagOpt('programing'),
				'embed':tagOpt('programing'),
				'object':tagOpt('programing'),
				'param':tagOpt('programing')

			}	
		//-----------------------------------------------------------------------------
		// las pre-options para cargar una instancia antes
		var preOptions = preOptions || {};
		//-----------------------------------------------------------------------------
		// Funcion que verifica que es string 
		function isString( obj ){			
			return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));			  
		}
		//-----------------------------------------------------------------------------
		// Funcion que verifica que es Function
		function isFunction( func ){

			return func && {}.toString.call(func) === '[object Function]';

		}
		// Function que verifica que exista 
		//-----------------------------------------------------------------------------
		function has( obj , property ){

			if( obj == null || obj == undefined || obj == true || obj == false ){ return false; }

			return obj.hasOwnProperty( property );

		}
		//-----------------------------------------------------------------------------
		// lista de tag que no nocesitan cierre 
		var tagsNonClose = ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'];
		//-----------------------------------------------------------------------------
		// verifica que el tag se cierra o no
		var isTagClose = function( tag ){

			return tagsNonClose.includes(tag);

		}
		//-----------------------------------------------------------------------------
		// Verificamos que el la variable sea null
		var isNull = function( obj ){

			return obj === null;

		}
		//-----------------------------------------------------------------------------
		// Obtenemos el before Content proveniente del objeto
		var getBeforeContent = function( obj ){
			
			return has( obj , 'beforeContent' )  ? isString(obj['beforeContent']) ? obj['beforeContent']: null  : null;

		}
		//-----------------------------------------------------------------------------
		// Obtenemos el after content del objecto
		var getAfterContent = function( obj ){
			
			return has( obj , 'afterContent' )  ? isString(obj['afterContent']) ? obj['afterContent'] : null   : null;

		}
		// Obtenemos el tag dele lemento
		//-----------------------------------------------------------------------------
		var getTag = function( obj , defaultTag){

		    return has( obj , 'tag' ) ? obj['tag'] : defaultTag;
		}
		//-----------------------------------------------------------------------------
		// obtenemos la base para remplaza segun el tag
		var getBase = function( tag ){

			return isTagClose(tag) ? "<$tag$attributes/>":"<$tag$attributes>$beforeContent$childrens$afterContent</$tag>";

		}
		//-----------------------------------------------------------------------------
		// Obtenemos los attributos del elemento
		var getAttr = function( obj ){

			return has( obj ,'attr') ?  obj ['attr'] : {};

		}
		//-----------------------------------------------------------------------------
		// obtenemos el hijo del elemento
		var getChildren = function( obj ){

			return has( obj ,'children') ?  obj ['children'] : null;

		}
		// Obtenemos los espacios para el nivil 
		// siempre y cuando sea pretty la vista
		var getlevel = function( level ){

			var stringLevel = "";

			for( var i = 0; i < level ; i++ ){
				stringLevel += " ";
			}
			return stringLevel;
		}		
		//-----------------------------------------------------------------------------
		// convertimos los attributos en una cadena 
		var attrToString = function( attr ){

			var stringAttr = '';

			// Esto ocurre en el caso que attr sea un objeto
			keys = Object.keys( attr );
			
			for( var i = 0; i <  keys.length; i++ ){

				if( isString(attr[keys[i]])  ){

					stringAttr += keys[i]+"=\""+attr[keys[i]]+"\" ";

				}
			}

			return stringAttr;

		}
		//-----------------------------------------------------------------------------
		// rtendereizamos 
		var render = function( htmljson , defaultTag , pretty , level){			

			// revisamos que sea un array
			htmljson = ( isFunction(htmljson.forEach) && has(htmljson,'length') ) ? htmljson : [htmljson];
			// variable de texto que va de salida
			var output = "";			
			// construimos elemento por elemento
			htmljson.forEach(function( elemDom ){
				// definos el tag 
				var tag  = getTag(elemDom,defaultTag),
				// definimos si el tag es cerrado o abierto
				base = getBase(tag),
				// verificamos que vengan los attributos
				attr = getAttr(elemDom),
				// verificamos 	que vengan hijos para el documento 
				childrens = getChildren( elemDom ),
				// 
				beforeContent = getBeforeContent( elemDom ),
				//
				afterContent = getAfterContent( elemDom ),
				
				stringLevel = getlevel( level ),
				// la cadena para stringAttr
				stringAttr = attrToString( attr );
				
				output += pretty ?  stringLevel : '';

				output += base.replace("<$tag","<"+tag)
				.replace("</$tag", (pretty && !isNull(childrens) ? stringLevel :'')+"</"+tag )
				.replace("$attributes",' '+stringAttr)
				.replace("$childrens", isNull(childrens) ? '' : ( pretty ? '\n':'')+render( childrens , defaultTag , pretty , (level+1) ) )
				.replace("$afterContent", isNull(afterContent) ? '': afterContent )
				.replace("$beforeContent", isNull(beforeContent) ? '':beforeContent )

				if( pretty == true  ){ output += "\n";  }
			});
			// mostramos la salida
			return output;
		}	
		// hay que ver que pasa aqui
		//-----------------------------------------------------------------------------
		return function( options ){			
			//-----------------------------------------------------------------------------
			this.getAlltag = function(){
				return tags;
			}			
			//-----------------------------------------------------------------------------
			/*
			*@name pretty
			*@type bollean
			*@description es base ha esta funcion el codigo de salida se mostrara
			*de una forma ordenada o comprimida siendo falso para comprimido 
			* y verdadero para ordenado
			*/
			this.pretty = false;
			//-----------------------------------------------------------------------------
			this.setPretty = function( pretty ){

				this.pretty = ( typeof pretty == 'boolean' ) ? pretty : this.pretty;

			}
			//-----------------------------------------------------------------------------
			/*
			*@options
			*@desc contiene las variables basicacas para arrancar 
			*el render del string html
			*/
			this.options = options == null || options == undefined ? {} :  options ;
			//-----------------------------------------------------------------------------
			/**
			*@var html 
			*@desc : Contendor del codigo html de forma de un string
			*/
			this.html = "";
			//-----------------------------------------------------------------------------
			this.structureJson = null;
			/*
			*@var defaultTag
			*@desc : Cuando no se describe el valor tag se toma este valor como prederminado
			*/
			this.defaultTag = "div";					
			//-----------------------------------------------------------------------------
			/*
			*@name load
			*@type Function
			*@description - carga el objecto array con los Object para la construccion
			*del texto html
			*@return - void
			*/
			this.load = function( htmljson ){
				this.structureJson = ( isFunction(htmljson.forEach) && has(htmljson,'length') ) ? htmljson : [htmljson];				
			}
			//-----------------------------------------------------------------------------
			/*
			*@name render
			*@type Function
			*@description - construye los objetos html en una cadena de texto
			*del texto html
			*@return - string - la cadena final
			*/
			this.render = function( htmljson ){	

				// verificamos que htmljson este creado 
				// o necesitaremos usar la variable structureJson
				var htmljson = htmljson == null || htmljson == undefined ? this.structureJson : htmljson;

				return render( htmljson , this.defaultTag , this.pretty , 0 );
			}
			//-----------------------------------------------------------------------------						
		}
	}
//-----------------------------------------------------------------------------
}));