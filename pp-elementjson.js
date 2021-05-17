
/*!!
 * Power Panel elementjson <https://github.com/carlos-sweb/pp-elementjson>
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @version 1.0.3 (2020/05/09 20:30 PM)
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

  var categorys = {
    'general':0,
    'basic':1,
    'title':2,
    'text':3,
    'formating':4,
    'form':5,
    'frame':6,
    'images':7,
    'audio/video':8,
    'link':9,
    'list':10,
    'table':11,
    'semantic':12,
    'meta/info':13,
    'programing':14
  }
  // https://www.w3schools.com/tags/ref_byfunc.asp
  //http://xahlee.info/js/html5_non-closing_tag.html
  // listar y categorizar
  //-----------------------------------------------------------------------------
  // Necesito crear un mapa de categoryas
  var tags = {
    '<!DOCTYPE>':[0,1],
    'html': [0,1] ,
    'head':[0,1],
    'title':[0,1],
    'body':[0,1],

    'h1':[2],
    'h2':[2],
    'h3':[2],
    'h4':[2],
    'h5':[2],
    'h6':[2],

    'p':[3],
    'br':[3],
    'hr':[3],
    '<!--...-->':[0,1],

    'abbr':[4],
    'address':[4],
    'b':[4],
    'bdi':[4],
    'bdo':[4],
    'blockquote':[4],
    'cite':[4],
    'code':[4],
    'del':[4],
    'dfn':[4],
    'em':[4],
    'i':[4],
    'ins':[4],
    'kbd':[4],
    'mark':[4],
    'meter':[4],
    'pre':[4],
    'progress':[4],
    'q':[4],

    'rp':[4],
    'rt':[4],
    'ruby':[4],
    's':[4],
    'samp':[4],
    'small':[4],
    'strong':[4],
    'sub':[4],
    'sup':[4],
    'template':[4],
    'time':[4],
    'u':[4],
    'var':[4],
    'wbr':[4],


    'form':[5],
    'input':[5],
    'textarea':[5],
    'button':[5],
    'select':[5],
    'optgroup':[5],
    'option':[5],
    'label':[5],
    'fieldset':[5],
    'legend':[5],
    'datalist':[5],
    'output':[5],

    'iframe':[6],


    'img':[7],
    'map':[7],
    'area':[7],
    'canvas':[7],
    'figcaption':[7],
    'figure':[7],
    'picture':[7],
    'svg':[7],

    'audio':[8],
    'source':[8],
    'track':[8],
    'video':[8],

    'a':[9],
    'link':[9],
    'nav':[9],


    'ul':[10],
    'ol':[10],
    'li':[10],
    'dl':[10],
    'dt':[10],
    'dd':[10],


    'table':[11],
    'caption':[11],
    'th':[11],
    'tr':[11],
    'td':[11],
    'thead':[11],
    'tbody':[11],
    'tfoot':[11],
    'col':[11],
    'colgroup':[11],

    'style':[12],
    'div':[12],
    'span':[12],
    'header':[12],
    'footer':[12],
    'main':[12],
    'section':[12],
    'article':[12],
    'aside':[12],
    'details':[12],
    'dialog':[12],
    'summary':[12],
    'data':[12],


    'head':[13],
    'meta':[13],
    'base':[13],

    'script':[14],
    'noscript':[14],
    'embed':[14],
    'object':[14],
    'param':[14]

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
function isTagClose( tag ){

  return tagsNonClose.includes(tag);

}
//-----------------------------------------------------------------------------
// Verificamos que el la variable sea null
function isNull( obj ){

  return obj === null;

}
//-----------------------------------------------------------------------------
// Obtenemos el before Content proveniente del objeto
function getBeforeContent( obj ){

  return has( obj , 'beforeContent' )  ? isString(obj['beforeContent']) ? obj['beforeContent']: null  : null;

}
//-----------------------------------------------------------------------------
// Obtenemos el after content del objecto
function getAfterContent( obj ){

  return has( obj , 'afterContent' )  ? isString(obj['afterContent']) ? obj['afterContent'] : null   : null;

}
// Obtenemos el tag dele lemento
//-----------------------------------------------------------------------------
function getTag( obj , defaultTag){

    return has( obj , 'tag' ) ? obj['tag'] : defaultTag;
}
//-----------------------------------------------------------------------------
// obtenemos la base para remplaza segun el tag
function getBase( tag ){

  return isTagClose(tag) ? "<$tag$attributes/>":"<$tag$attributes>$beforeContent$childrens$afterContent</$tag>";

}
//-----------------------------------------------------------------------------
// Obtenemos los attributos del elemento
function getAttr( obj ){

  return has( obj ,'attr') ?  obj ['attr'] : {};

}
//-----------------------------------------------------------------------------
// obtenemos el hijo del elemento
function getChildren( obj ){

  return has( obj ,'children') ?  obj ['children'] : null;

}
// Obtenemos los espacios para el nivil
// siempre y cuando sea pretty la vista
function getlevel( level ){

  var stringLevel = "";

  for( var i = 0; i < level ; i++ ){
    stringLevel += " ";
  }
  return stringLevel;
}
//-----------------------------------------------------------------------------
// convertimos los attributos en una cadena
function attrToString( attr ){

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
function render( htmljson , defaultTag , pretty , level){

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

  var ppElementjson = function( options ){
      this.pretty = false;
      this.options = options == null || options == undefined ? {} :  options ;
      this.html = '';
      this.structureJson = null;
      this.defaultTag = 'div'
  },
  proto = ppElementjson.prototype;

  proto.getAlltag = function(){
    return {'tags':tags,'categorys':categorys};
  }
  proto.setPretty = function( pretty ){
    this.pretty = ( typeof pretty == 'boolean' ) ? pretty : this.pretty;
  }
  proto.load = function( htmljson ){
    if( htmljson !== null || typeof htmljson !== 'undefined' ){
      this.structureJson = ( isFunction(htmljson.forEach) && has(htmljson,'length') ) ? htmljson : [htmljson];
    }
  }

  proto.render = function( htmljson ){
    // verificamos que htmljson este creado
    // o necesitaremos usar la variable structureJson
    var htmljson = htmljson == null || htmljson == undefined ? this.structureJson : htmljson;

    return htmljson !== null ? render( htmljson , this.defaultTag , this.pretty , 0 ) : '';
  }

  return ppElementjson;
//-----------------------------------------------------------------------------
}));
