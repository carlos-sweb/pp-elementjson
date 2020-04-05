define(function(){
// ----------------------------------------------------------------------------
//BUTTON 
/**
 * @const mdcButton
 * @description - 
 */        
const mdcButton  = {
    "o":[{
        "t":".bu",
        "a":{
            "class":"mdc-button <%=variant%>"
        },
        "c":[{
            "a":"class@mdc-button__ripple",
        },{
            "t":".s",
            "a":"class@mdc-button__label",
            "bc":"<%=text%>"
        }]
    }],
    "d":{
        "variant":"",
        "text":"",
    }
};

var mdcButtonHelper = function(Btn,Variant){

    return { 

        o:JSON.parse(JSON.stringify(Btn["o"])),

        d:Object.assign(JSON.parse(JSON.stringify(Btn["d"])),{variant: 'mdc-button--'.concat(Variant) }) 

    }

};

//mdc-button--outlined
const mdcButtonOutlined  =  mdcButtonHelper(mdcButton,'outlined')
//mdc-button--raised
const mdcButtonRaised  =  mdcButtonHelper(mdcButton,'raised')
//mdc-button--unelevated
const mdcButtonUnelevated = mdcButtonHelper(mdcButton,'unelevated')
// ----------------------------------------------------------------------------
//FAB







    var menu = {
        "o":[{
            "t":"button",
            "a":"class@mdc-button"
        }],
        "d":{

        }
    }
    /**
     * @object topAppBar
     */
    var  baseModal = { "o" : [{
        "t":"aside",
        "a":"class@mdc-drawer mdc-drawer--modal|ci-listenTo.open@topAppBarMain:nav|id@drawerMain|ci-listenTo.close@listdrawer:itemclick",
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
                "a":"class@mdc-list|id@listdrawer",
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
            "a":"class@mdc-top-app-bar <%=css%> <%=elevation%>|id@topAppBarMain",
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
                    },
                    {
                        "t":"section",
                        "a":"class@mdc-top-app-bar__section mdc-top-app-bar__section--align-end|role@toolbar",
                        "c":[{
                            "a":"class@mdc-menu-surface--anchor",
                            "c":[{
                                "t":".bu",
                                "a":"class@mdc-top-app-bar__action-item mdc-icon-button|aria-label@language|id@btnlanguage",
                                "c":[{
                                    "t":"img",
                                    "a":"src@static/language/es.svg|class@flag-img-language"
                                }]
                            },{
                                "a":"class@mdc-menu mdc-menu-surface|tabindex@-1|ci-listenTo.open@btnlanguage:click|id@menulanguage",
                                "c":[{
                                    "t":"ul",
                                    "a":"class@mdc-list|role=menu|aria-hidden@true|id@listlanguage",
                                    "c":[{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/es.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Español"
                                        }]
                                    },{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/en.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Ingles"
                                        }]
                                    },{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/pt.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Portugues"
                                        }]
                                    },{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/fr.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Frances"
                                        }]
                                    },{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/de.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Alemán"
                                        }]
                                    },{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/ru.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Ruso"
                                        }]
                                    },{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/ja.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Japonés"
                                        }]
                                    },{
                                        "t":"li",
                                        "a":"class@mdc-list-item mdc-ripple-upgraded|role@menuitem|tabeindex@-1",
                                        "c":[{
                                            "t":"img",
                                            "a":"src@static/language/zh.svg|class@flag-img-language"
                                        },{
                                            "t":"span",
                                            "bc":"&nbsp;Chino"
                                        }]
                                    }]
                                }]
                            }]
                        },{
                            "t":"button",
                            "a":"class@material-icons mdc-top-app-bar__action-item mdc-icon-button|aria-label@Download",
                            "bc":"account_circle"
                        }]
                    }
                ]
            }]
        },{
            "tag":"main",
            "c":[{
                "a":"class@mdc-drawer-app-content mdc-top-app-bar--fixed-adjust|id@view-content"
            }]
        }],
    }],
    "d":{
    "css":"",
    "elevation":"mdc-elevation--z1",
    "title":"",
    "id":true,
    }};


    const components = {
        baseModal:baseModal,
        menu:menu,
        mdcButton:mdcButton
    };

return components;

});