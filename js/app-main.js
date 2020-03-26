requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl:"",
	paths:{
		"alpine":"node_modules/alpinejs/dist/alpine",
		"jquery":"node_modules/zepto/dist/zepto.min",
		"backbone":"node_modules/backbone/backbone-min",
		"underscore":"node_modules/underscore/underscore-min",
		"mdc":"node_modules/material-components-web/dist/material-components-web.min",
		
		"ElementJS":"dist/elementjson",
		"elementjson-materialui":"dist/elementjson-materialui/elementjson-materialui",

		"config":"js/app-config",
		"router":"js/app-router",

		"view-main":"js/app-view-main"
	}
});

require(["router"],function(router){
	new router();
});