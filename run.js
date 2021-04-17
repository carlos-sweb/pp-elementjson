var ElementJs  = require('./ElementJs.js');


var elem = new ElementJs({

});


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
			}
		}]		
}]);

//console.log( ppElem.tags );
console.log( ppElem.render() );