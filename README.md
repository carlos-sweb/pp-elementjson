# pp-elementjson

## Getting Started

In the web project include pp-elementjson.js with:

```
<script src="https://cdn.jsdelivr.net/npm/pp-elementjson.js@1.0.0/pp-elementjson.min.js" ></script>
```

Or 

## Install

```
npm i pp-elementjson.js --save
```

## Initialize

```javascript
// Declare elementjson here
var elem = new ElementJs({});

var ppElem = new elem();

ppElem.setPretty(true);

ppElem.load([{
	tag:"div",
	attr:{
		id:"hello",
		class:"navbar"
	}	
},{	
	attr:{
		id:"other",
		class:"section container-full",		
	},
	children:[{
			tag:"h1",
			attr:{
				id:"title-uno",
				class:"othermore"
			},
			beforeContent: " Hi everyone ",
			afterContent:" Hi Buddy"
		}]		
}]);

console.log( ppElem.render() );

```

## Methods

### load: [Function]

```javascript
ppElem.load([Array]);
```

### render: [Function]

```javascript
ppElem.render();
```