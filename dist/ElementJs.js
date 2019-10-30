//     ElementJs.js 1.0.0
//     (c) 2016-2020 Carlos Enrique Illesca Monsalve
//     ElementJs may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://elementjs.netlify.com
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
      root.ElementJs = factory(root, exports, _, $);
    });
  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.ElementJs = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
  }
})(function(root, ElementJs, _, $){
'use strict';
// List tag not close
const TAG_notclose = ['img','meta','link','script','br'];
// function register components
var register = function(name,obj,data){

	const _data = data || {};
	const _obj = obj || {};

	if( _.isObject(_obj) ){
		if( !_.isEmpty(_obj) ){
			if( !_.isEmpty(_data) ){
			 this.dataVars = Object.assign(this.dataVars,_.object([name],[_data]));
			}
			this._components[name] = Object.assign(  {} , {"o":obj,"d":data} );
		};
	};
};

/**
 * @function createAttr
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {(string|object)} attributes - Listado de attributos para ingresar en el elemento
 * @returns {string} cadena con los attributos html formateados en su formato ejemplo: id="myid" name="myname"
 */
var createAttr = function(attr){
	var _attr = "";
	if( _.isObject(attr) ){
		for( const _name in attr ){
			_attr +=_name+"='"+attr[_name]+"' ";
		};	
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
	return _attr;
}

/**
 * @function create
 * @author Carlos Illesca <c4rl0sill3sc4@gmail.com>
 * @param {(object|Array)} objHtml - Objecto o Array para la construcción del componente html
 * @returns {string} cadena en formato html
 */
var create = function(objHtml){
		if(  !_.isFunction(objHtml.forEach)  ){ objHtml=[objHtml]   };	
		var EString = ""
		for(var i = 0; i < objHtml.length;i++){
			 const tag  = objHtml[i].tag || objHtml[i].t || "div" ;
			 const beforeContent = objHtml[i].beforeContent || objHtml[i].bc || "";
			 const afterContent = objHtml[i].afterContent || objHtml[i].ac || "";
			 const notClose = _.indexOf(['img','meta','link','script','br'],tag) != -1;
			 const attr = objHtml[i].attr || objHtml[i].a || {};
			 const attrString = createAttr(attr);
			 const each = objHtml[i].each || null;

			 const children = objHtml[i].children || objHtml[i].c || null;
			
			 if(notClose){
			 	 EString += "<"+tag+" "+attrString+">";
			 }else{
			 	
			 	EString += _.isNull(each) ? "" : 
			 	"<% if(typeof "+each+" !== 'undefined' ) _.each("+each+",function(item,iterator){%>";
				EString += "<"+tag+" "+attrString+">\n";
				EString += beforeContent;
				if(!_.isNull(children)){
					EString += create(children);
				};
				EString += afterContent;
				EString += "</"+tag+">\n"; 
				EString += _.isNull(each) ? "" : "<%})%>";

			 };
		};
		return EString;
};

var get = function(type){
		return this.EString;	
};

return {
	extend:function(options){
		return  function(options){
			this.dataVars = {};
			// define content for components
			this._components = {};
			
			this.options = options || {}
			
			this.TAG_notclose = TAG_notclose;
			// function register components
			this.register = register.bind(this)
			// function create String html Structure
			this.create = function(objHtml){
				this.EString = create(objHtml);
			}
			
			this.get = get.bind(this)

			this.getTemplate = function(dataVars){
				_.extend(this.dataVars,dataVars)
				return _.template(this.get())(this.dataVars);
			}

			this.components = function(name,extend){

				const components = this._components[name] || {};
				
				const components_clone = _.clone(components);
				
				extend = extend || {};

				return _.extend(components["o"],extend);

			};

		}.bind(this,options)
	}
}
})
