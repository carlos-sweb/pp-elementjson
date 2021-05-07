var ppElementjson  = require('./pp-elementjson.js');

var ppElem = new ppElementjson();

ppElem.setPretty(true);

ppElem.load([{
	tag:"div",
	attr:{
		id:"hola",
		class:"navbar"
	}
},{
	attr:{
		id:"otro",
		class:"section container-full",
	},
	children:[{
			tag:"h1",
			attr:{
				id:"title-uno",
				class:"otromas"
			},
			beforeContent: "Hola a todos ",
			afterContent:"Amigos mios"
		}]
}]);

console.log( ppElem.render() );
