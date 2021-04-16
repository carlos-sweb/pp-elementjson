var ElementJs  = require('./ElementJs.js');


var elem = new ElementJs({

});


var ppElem = new elem();


ppElem.load({
	tag:"div",
	attr:{
		id:"hola",
		class:"navbar"
	}
});


console.log( ppElem.render() );






