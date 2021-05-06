var ElementJs  = require('./pp-elementjson.min.js');

var elem = new ElementJs({});

var ppElem = new elem();

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