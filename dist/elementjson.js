//     elementjson.js 1.0.0
//     (c) 2016-2020 Carlos Enrique Illesca Monsalve
//     elementjson may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://elementjson.netlify.com
(function (factory) {
  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global;
  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.elementjson = factory(root, exports, _, $);
    });
  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory(root, exports, _, $);
  // Finally, as a browser global.
  } else {
    root.elementjson = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
  }
})(function(root, elementjson, _, $){
'use strict';


elementjson.tags = {
	".a"  :"abbr",
	".ad" :"address",
	".ar" :"area",
	".at" :"article",
	".as" :"aside",
	".au" :"audio",
	".b"  :"base",
	"bdo" :"bdo",
	".bq" :"blockquote",
	".bd" :"body",
	"br"  :"br",
	".bu" :"button",
	".c"  :"canvas",
	".cp" :"caption",
	".ci" :"cite",
	".co" :"code",

	".s":"span",
	".h":"header"
};
/**
 * @function getTag
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {strimg} tag - Nombre del tag https://www.w3schools.com/TAGS/default.ASP
 * @returns {string} - El nombre del tag  
 */
elementjson.getTag = function(tag){
	return _.has(this.tags,tag) ? this.tags[tag] : tag ;
}

/**
 * @function TAG_notclose
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {strimg} tagname - Etiqueta para saber si es necesario la declaración de cierre
 * @returns {boolean}  
 */
elementjson.tag_noclose = function(tagname){
	return _.indexOf(['img','meta','link','script','br'],tagname) != -1;
};

/**
 * @function createAttr
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {(string|object)} attributes - Listado de attributos para ingresar en el elemento
 * @returns {string} cadena con los attributos html formateados en su formato ejemplo: id="myid" name="myname"
 */
elementjson.createAttr = function(attr){

	var _attr = "";
	// no es suficiente con preguntar si isObject preguntamos 
	// si nes un objecto por la funcion nativa de una array
	if( _.isObject(attr) && !_.isFunction(attr.forEach) ){

		for( const _name in attr ){
			_attr +=_name+"='"+attr[_name]+"' ";
		};
	}else if( _.isArray(attr) && _.isFunction(attr.forEach) ){

		attr.forEach((__attr)=>{

			_attr += this.createAttr(__attr);

		})	

	}else if ( _.isString(attr) ){
		const ArrayAttr = attr.split("|");
	    for(const _iden in ArrayAttr){
	    	 const __name = ArrayAttr[_iden].split("@");
	    	 if(!_.isUndefined(__name[1])){
	    	 	_attr +=  __name[0]+"='"+ __name[1] +"' " 
	    	 }else{
	    	 	_attr+= __name[0]+" ";
	    	 };
	    	
	    };
	};
	return _attr === "" ? "":" "+_attr.trim();
}
/**
 * @function create
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {(object|Array)} objHtml - Objecto o Array para la construcción del componente html
 * @returns {string} cadena en formato html
 */
elementjson.create = function(objHtml){
	
		if(  !_.isFunction(objHtml.forEach)  ){ objHtml=[objHtml]   };	
		
		var EString = ""
		for(var i = 0; i < objHtml.length;i++){

			//if(objHtml[i].constructor.name == 'Object'){
				 const tag  = objHtml[i].tag || objHtml[i].t || "div" ;
				 const ptag = elementjson.getTag(tag);
				 const beforeContent = objHtml[i].beforeContent || objHtml[i].bc || "";
				 const afterContent = objHtml[i].afterContent || objHtml[i].ac || "";
				 
				 const notClose = _.indexOf(this.tag_noclose,tag) != -1;

				 const attr = objHtml[i].attr || objHtml[i].a || {};
				 const attrString = this.createAttr(attr);
				 const each = objHtml[i].each || null;

				 const children = objHtml[i].children || objHtml[i].c || null;
				 
				 const _if = objHtml[i].i || null;
				 
				 if(notClose){
				 	 EString += "<"+ptag+" "+attrString+">";
				 }else{
				 	
				 	EString += _.isNull(_if) ? "":"<% if("+_if+"){ %>";
				 	EString += _.isNull(each) ? "" : 
				 	"<% if(typeof "+each+" !== 'undefined' ) _.each("+each+",function(item,iterator){%>";
					EString += "<"+ptag+attrString+">";
					EString += beforeContent;
					if(!_.isNull(children)){
						EString += this.create(children);
					};
					EString += afterContent;
					EString += "</"+ptag+">"; 
					EString += _.isNull(each) ? "" : "<%})%>";
					EString += _.isNull(_if) ? "":"<%}%>";

				 };
			//}else{
				//EString += _.template(this.create(objHtml[i]["o"]))(objHtml[i]["d"]);
			//};
		};
		return EString;

};

/**
 * @object Components
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 */
var Components = elementjson.Components = {};
/**
 * @function create
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {string} name - Nombre del Componente para manipular
 * @returns {object} cadena en formato html
 */
Components.getComponents = function(name){
	
	const noFoundComponent = {
		"o":{"t":"p","bc":"<%=text%> @Component:<%=name%>"},
		"d":{"text":"Error","name":""}
	};

	_.extend(noFoundComponent["d"],{"name":name ? name :""});

	return _.has(this.List,name) ?  this.List[name] : noFoundComponent;
};
/**
 * @object List
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 */
Components.List = {};
/**
 * @function registerGroup
 * @autor Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {Array} ListComponent - lista de los componentes ha registrar 
 */
elementjson.registerGroup = function(ListComponent){
	_.extend(this.Components.List,ListComponent);
}
/**
 * @function getComponent
 * @autor Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {string} name - Nombre del componente
 * @param {object} data - lista de la data a remplazar 
 */
elementjson.getComponent = function( name , data , callback , manipulate ){

	/*
	*@const components
	*@description 
	*/		 
	const components = this.Components.getComponents(name);

	/*
	*@let _object
	*/
	let _object = {};
	/*
	*@let _data
	*
	*/ 
	let _data = {};

	 if( _.isFunction(manipulate) ){

		const _manipulate = manipulate(components)

		_object = _manipulate["o"]

		_data      = _.isNull(data) ? _manipulate["d"] : _.extend(_manipulate["d"],data)

	 }else{

		_object   = components["o"]

		_data      = _.isNull(data) ? components["d"] : _.extend(components["d"],data)

	 }
	 

	 const _template  = _.template(this.create(  _object ))( _data )

	 if( _.isFunction(callback) ){
		 
		 const _callback = callback( _template ); 
		 
		 return ()=>{

		 }
         //_.isUndefined( _callback ) ? _template : _callback ;

	 }else{

		return ( ___attr ) => {


			return {
				render:()=>{

					let __object = _.first(_object);

						let n___attr = __object.a || _object.attr || "";

						/**/
						if( _.isString(n___attr) ){
							console.log("Es cadena");
							console.log(n___attr);
						}

						if( _.isObject(n___attr) && !_.isFunction(n___attr.forEach) ){
							console.log("Es object");
							console.log(n___attr);
						}
						//  El objecto principal es un array -START
						if( _.isArray(n___attr) && _.isFunction(n___attr.forEach) ){

							if( _.isString(___attr) ){

								n___attr = n___attr.concat([___attr]);

							}

							if( _.isObject(___attr) && !_.isFunction( ___attr.forEach ) ){
									
									n___attr = n___attr.concat([___attr]);
													
							}

							if( _.isArray(___attr) && _.isFunction( ___attr.forEach ) ){

									n___attr = n___attr.concat(___attr);

							}
							
						}
						//  El objecto principal es un array - END

						if(  _.has( _object[0],'a' )  ){

							console.log("Aqui lo agrega");

							_object[0].a = n___attr;

						}

						if(  _.has( _object[0],'attr' )  ){

							_object[0].attr = n___attr;

						}


					return _.template(this.create(  _object ))( _data )

				}
			}
			// render
		};

		 //_template;

	 };// funtion
	 

};

return elementjson;

})
