define(function(){
/**
 * @object topAppBar
 */
var  baseModal = { "o" : [{
    "t":"aside",
    "a":"class@mdc-drawer mdc-drawer--modal",
    "c":[{
        "a":"class@mdc-drawer__content"
    }]   
},{
    "a":"class@mdc-drawer-scrim"
},{
    "a":"class@mdc-drawer-app-content",
    "c":[{
        "t":".h",
        "a":"class@mdc-top-app-bar <%=css%> <%=elevation%>|id@<%=_.uniqueId('topAppBar_')%>",
        "c":[{
            "a":"class@mdc-top-app-bar__row",
            "c":[
                {
                    "t":"section",
                    "a":"class@mdc-top-app-bar__section mdc-top-app-bar__section--align-start",
                    "c":[{
                            "t":"button",
                            "a":"class@material-icons mdc-top-app-bar__navigation-icon mdc-icon-button",
                            "bc":"menu"
                        },{
                            "t":"span",
                            "a":"class@mdc-top-app-bar__title",
                            "bc":"<%=title%>"
                        }]
                }
            ]
        }]
    },{
        "a":"class@mdc-top-app-bar--fixed-adjust",
        "bc":"hola"
    }],
}],
"d":{
  "css":"",
  "elevation":"mdc-elevation--z1",
  "title":"",
  "id":true
}};


var components = {
    baseModal:baseModal
};

return components;

});