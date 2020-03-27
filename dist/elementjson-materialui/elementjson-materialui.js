define(function(){
/**
 * @object topAppBar
 */
var  baseModal = { "o" : [{
    "t":"aside",
    "a":"class@mdc-drawer mdc-drawer--modal",
    "c":[{
        "a":"class@mdc-drawer__header",
        "c":[{
                "t":"h3",
                "bc":"Guía",
                "a":"class@mdc-drawer__title"
            },
            {
                "t":"h6",
                "bc":"c4rl0sill3sc4@gmail.com",
                "a":"class@mdc-drawer__subtitle"
            }]
    },{
        "a":"class@mdc-drawer__content",
        "c":[{
            "t":"nav",
            "a":"class@mdc-list",
            "c":[{
                "t":"a",
                "a":"class@mdc-list-item|href@#|tabindex@0",
                "c":[
                    {"t":"i","a":"class@material-icons mdc-list-item__graphic|aria-hidden@true","bc":"drafts"},
                    {"t":"span","a":"class@mdc-list-item__text","bc":"Drafts"}
                ]
            }]
        }]
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
  "id":true,
}};


var components = {
    baseModal:baseModal
};

return components;

});