requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl:"",
	paths:{
		"alpine":"node_modules/alpinejs/dist/alpine",
		"jquery":"node_modules/zepto/dist/zepto.min",
		"backbone":"node_modules/backbone/backbone-min",
		"underscore":"node_modules/underscore/underscore-min",
		"config":"js/app-config",
		"router":"js/app-router"
	}
});

require(["router"],function(router){
	
	new router();


});