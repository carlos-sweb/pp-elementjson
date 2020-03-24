requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl:"",
	paths:{
		"alpine":"node_modules/alpinejs/dist/alpine"
	}
});

require(["alpine"],function(alpine){
	console.log("Work");
});