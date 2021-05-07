
/*!!
 * Power Panel elementjson <https://github.com/carlos-sweb/pp-elementjson>
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @version 1.0.1 (2020/02/28 09:40 AM)
 * Released under the MIT License
 */
(function(global , factory ){

  	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :

  	typeof define === 'function' && define.amd ? define('ppElementjson', factory) :

	(global = global || self, (function () {

    var exports = global.ppElementjson = factory();

	}()

));

})( this,(function() {

	return function( options ){

			// https://www.w3schools.com/tags/ref_byfunc.asp
			//http://xahlee.info/js/html5_non-closing_tag.html
			// listar y categorizar
			//-----------------------------------------------------------------------------
      // Necesito crear un mapa de categoryas
			var tags = {
				'<!DOCTYPE>':tagOpt(['general','basic']),
				'html': ['general','basic'] ,
				'head':['general','basic'],
				'title':['general','basic'],
				'body':['general','basic'],

				'h1':['title'],
				'h2':['title'],
				'h3':['title'],
				'h4':['title'],
				'h5':['title'],
				'h6':['title'],

				'p':['text'],
				'br':['text'],
				'hr':['text'],
				'<!--...-->':['general','basic'],

				'abbr':['formating'],
				'address':['formating'],
				'b':['formating'],
				'bdi':['formating'],
				'bdo':['formating'],
				'blockquote':['formating'],
				'cite':['formating'],
				'code':['formating'],
				'del':['formating'],
				'dfn':['formating'],
				'em':['formating'],
				'i':['formating'],
				'ins':['formating'],
				'kbd':['formating'],
				'mark':['formating'],
				'meter':['formating'],
				'pre':['formating'],
				'progress':['formating'],
				'q':['formating'],

				'rp':['formating'],
				'rt':['formating'],
				'ruby':['formating'],
				's':['formating'],
				'samp':['formating'],
				'small':['formating'],
				'strong':['formating'],
				'sub':['formating'],
				'sup':['formating'],
				'template':['formating'],
				'time':['formating'],
				'u':['formating'],
				'var':['formating'],
				'wbr':['formating'],


				'form':['form'],
				'input':['form'],
				'textarea':['form'],
				'button':['form'],
				'select':['form'],
				'optgroup':['form'],
				'option':['form'],
				'label':['form'],
				'fieldset':['form'],
				'legend':['form'],
				'datalist':['form'],
				'output':['form'],

				'iframe':['frame'],


				'img':['images'],
				'map':['images'],
				'area':['images'],
				'canvas':['images'],
				'figcaption':['images'],
				'figure':['images'],
				'picture':['images'],
				'svg':['images'],

				'audio':['audio/video'],
				'source':['audio/video'],
				'track':['audio/video'],
				'video':['audio/video'],

				'a':['link'],
				'link':['link'],
				'nav':['link'],


				'ul':['list'],
				'ol':['list'],
				'li':['list'],
				'dl':['list'],
				'dt':['list'],
				'dd':['list'],


				'table':['table'],
				'caption':['table'],
				'th':['table'],
				'tr':['table'],
				'td':['table'],
				'thead':['table'],
				'tbody':['table'],
				'tfoot':['table'],
				'col':['table'],
				'colgroup':['table'],

				'style':['semantic'],
				'div':['semantic'],
				'span':['semantic'],
				'header':['semantic'],
				'footer':['semantic'],
				'main':['semantic'],
				'section':['semantic'],
				'article':['semantic'],
				'aside':['semantic'],
				'details':['semantic'],
				'dialog':['semantic'],
				'summary':['semantic'],
				'data':['semantic'],


				'head':['meta/info'],
				'meta':['meta/info'],
				'base':['meta/info'],

				'script':['programing'],
				'noscript':['programing'],
				'embed':['programing'],
				'object':['programing'],
				'param':['programing']

			}
		//-----------------------------------------------------------------------------
		// las pre-options para cargar una instancia antes
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
		var tagsNonClose = ['area','base','br','col','embed','hr','img','input',
    'link','meta','param','source','track','wbr'];
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
//-----------------------------------------------------------------------------
}));
