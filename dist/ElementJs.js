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




let ObjectRegister = function(name,{o,d}){

	this.name = name;
	this.iden = this.name+_.uniqueId("_");

	this.o = o || [];
	this.d = d || {};
	this.clone = function(o){
		let o_vtr;
		try{
			o_vtr = JSON.parse(JSON.stringify(o));	
		}catch(e){
			console.log("Error ObjectRegister",e);
			o_vtr = {};
		}
		return o_vtr;
	};
	this.get = function(obj,data){
		let o = this.clone(this.o);
		let d = this.clone(this.d);
		return _.object(["o",'d'],[o,d]) ;
	}
}


// List tag not close
const TAG_notclose = ['img','meta','link','script','br'];
// function register components
var register = function(name,obj,data){

	const _data = data || {};
	const _obj = obj || {};

	if( _.isObject(_obj) ){
		if( !_.isEmpty(_obj) ){
			this._components[name] =  new ObjectRegister(name,Object.assign({}, {"o":_obj,"d":_data})) ;
			
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
	return _attr === "" ? "":" "+_attr;
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

			if(objHtml[i].constructor.name == 'Object'){
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
					EString += "<"+tag+attrString+">";
					EString += beforeContent;
					if(!_.isNull(children)){
						EString += create(children);
					};
					EString += afterContent;
					EString += "</"+tag+">"; 
					EString += _.isNull(each) ? "" : "<%})%>";

				 };
			}else{
				console.log(objHtml[i]);
				EString += _.template(create(objHtml[i]["o"]))(objHtml[i]["d"]);
			};
		};
		return EString;
};

var get = function(type){
		return this.EString;	
};

/*
var a = new ObjectRegister({
	name:"btn",
	data:{text:"Holi"},
	element:[{t:"h1",bc:"hola <%=text%>"}]
});

var b = new ObjectRegister("btn",[{
	t:"button",
	bc:"<%=data.var()%>"
}],{text:"hola"});


console.log( _.template(create( a.element ))(a.data)  );
*/


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
			
			this.clone = function(o){
				return JSON.parse(JSON.stringify(o))
			}

			this.components = function(name,extend,data){

				const components = this._components[name] || {};
				
				const clone = this.clone(components)
				
				data = data || {};

				_.extend(clone["d"],data);	

				extend = extend || {};
				
				_.extend(clone["o"],extend)
				
				return new ObjectRegister(clone.name,{o:clone.o,d:clone.d});

			};

		}.bind(this,options)
	}
}
})