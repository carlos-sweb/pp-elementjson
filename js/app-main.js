requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl:"",
	paths:{
		"alpine":"node_modules/alpinejs/dist/alpine",
		
		"reactive":"dist/element-reactive",

		"jquery":"node_modules/zepto/dist/zepto.min",
		"backbone":"node_modules/backbone/backbone-min",
		"underscore":"node_modules/underscore/underscore-min",
		"mdc":"node_modules/material-components-web/dist/material-components-web.min",
		
		
		"ElementJS":"dist/elementjson",
		"elementjson-materialui":"dist/elementjson-materialui/elementjson-materialui",
		"directive":"dist/elementjson-materialui/directive",

		"helper-router":"js-helper/helper-router",

		

		"config":"js/app-config",
		"router":"js/app-router",

		"view-main":"js/app-view-main",
		"view-content":"js/app-view-content"
	}
});

require(["router"],function(router){
	new router();
});