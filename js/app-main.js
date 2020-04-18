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
		"directive":"dist/directives",

		"helper-router":"js-helper/helper-router",
		"helper-directive":"js-helper/helper-directive",

		"config":"js/app-config",
		"router":"js/app-router",

		"text":"node_modules/text/text",

		"async": 'node_modules/requirejs-pluginslib/require/async',
		"font": 'node_modules/requirejs-pluginslib/require/font',
		"goog": 'node_modules/requirejs-pluginslib/require/goog',
		"image": 'node_modules/requirejs-pluginslib/require/image',
		"json": 'node_modules/requirejs-pluginslib/require/json',
		"noext": 'node_modules/requirejs-pluginslib/require/noext',
		"mdown": 'node_modules/requirejs-pluginslib/require/mdown',
		"propertyParser" : 'node_modules/requirejs-pluginslib/require/propertyParser',
		"markdownConverter" : 'node_modules/requirejs-pluginslib/Markdown.Converter',



		"view-main":"js/app-view-main",
		"view-content":"js/app-view-content"
	}
});

require(["router"],function(router){
	new router();
});