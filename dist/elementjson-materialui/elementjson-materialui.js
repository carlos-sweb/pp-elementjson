define(function(){
/**
 * @object topAppBar
 */
var  topAppBar = { "o" : {
    "t":"header",
    "a":"class@mdc-top-app-bar <%=css%> <%=elevation%>",
    "children":[{
        "a":"class@mdc-top-app-bar__row"
    }]
},
"d":{
  "css":"",
  "elevation":"mdc-elevation--z1"  
}};

var components = {
    topAppBar:topAppBar
};

return components;


});