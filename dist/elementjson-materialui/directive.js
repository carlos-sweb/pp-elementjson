define([
    './dist/elementjson-materialui/directive/MDCButton.js',
    './dist/elementjson-materialui/directive/MDCCards.js',
    './dist/elementjson-materialui/directive/MDCCheckbox.js',
    './dist/elementjson-materialui/directive/MDCChips.js',
    './dist/elementjson-materialui/directive/MDCDataTable.js',
    './dist/elementjson-materialui/directive/MDCDialog.js',
    './dist/elementjson-materialui/directive/MDCDrawer.js',
    './dist/elementjson-materialui/directive/MDCFloatingLabel.js',
    './dist/elementjson-materialui/directive/MDCFormField.js',
    './dist/elementjson-materialui/directive/MDCIconbutton.js',
    './dist/elementjson-materialui/directive/MDCLinearProgress.js',
    './dist/elementjson-materialui/directive/MDCList.js',
    './dist/elementjson-materialui/directive/MDCMenu.js',
    './dist/elementjson-materialui/directive/MDCMenuSurface.js',
    './dist/elementjson-materialui/directive/MDCNotchedOutline.js',
    './dist/elementjson-materialui/directive/MDCRadio.js',
    './dist/elementjson-materialui/directive/MDCRipple.js',
    './dist/elementjson-materialui/directive/MDCSelect.js',
    './dist/elementjson-materialui/directive/MDCSelectHelperText.js',
    './dist/elementjson-materialui/directive/MDCSelectIcon.js',
    './dist/elementjson-materialui/directive/MDCSlider.js',
    './dist/elementjson-materialui/directive/MDCSnackbar.js',
    './dist/elementjson-materialui/directive/MDCSwitch.js',
    './dist/elementjson-materialui/directive/MDCTabBar.js',
    './dist/elementjson-materialui/directive/MDCTabIndicator.js',
    './dist/elementjson-materialui/directive/MDCTabScroller.js',
    './dist/elementjson-materialui/directive/MDCTextField.js',
    './dist/elementjson-materialui/directive/MDCTextFieldCharacterCounter.js',
    './dist/elementjson-materialui/directive/MDCTextFieldHelperText.js',
    './dist/elementjson-materialui/directive/MDCTextFieldIcon.js',
    './dist/elementjson-materialui/directive/MDCTopAppBar.js',
    './dist/elementjson-materialui/EventEmitter.js'
],function(
    MDCButton,
    MDCCards,
    MDCCheckbox,
    MDCChips,
    MDCDataTable,
    MDCDialog,
    MDCDrawer,
    MDCFloatingLabel,
    MDCFormField,
    MDCIconButton,
    MDCLinearProgress,
    MDCList,
    MDCMenu,
    MDCMenuSurface,
    MDCNotchedOutline,
    MDCRadio,
    MDCRipple,
    MDCSelect,
    MDCSelectHelperText,
    MDCSelectIcon,
    MDCSlider,
    MDCSnackbar,
    MDCSwitch,
    MDCTabBar,
    MDCTabIndicator,
    MDCTabScroller,
    MDCTextField,
    MDCTextFieldCharacterCounter,
    MDCTextFieldHelperText,
    MDCTextFieldIcon,
    MDCTopAppBar,
    EventEmitter
){
/**
 * @constant
 * @type {object}
 * @default
 */
const directives = {
    MDCButton:MDCButton,
    MDCCards:MDCCards,
    MDCCheckbox:MDCCheckbox,
    MDCChips:MDCChips,
    MDCDataTable:MDCDataTable,
    MDCDialog:MDCDialog,
    MDCDrawer:MDCDrawer,
    MDCFloatingLabel:MDCFloatingLabel,
    MDCFormField:MDCFormField,
    MDCIconButton:MDCIconButton,
    MDCLinearProgress:MDCLinearProgress,
    MDCList:MDCList,
    MDCMenu:MDCMenu,
    MDCMenuSurface:MDCMenuSurface,
    MDCNotchedOutline:MDCNotchedOutline,
    MDCRadio:MDCRadio,
    MDCRipple:MDCRipple,
    MDCSelect:MDCSelect,
    MDCSelectHelperText:MDCSelectHelperText,
    MDCSelectIcon:MDCSelectIcon,
    MDCSlider:MDCSlider,
    MDCSnackbar:MDCSnackbar,
    MDCSwitch:MDCSwitch,
    MDCTabBar:MDCTabBar,
    MDCTabIndicator:MDCTabIndicator,
    MDCTabScroller:MDCTabScroller,
    MDCTextField:MDCTextField,
    MDCTextFieldCharacterCounter:MDCTextFieldCharacterCounter,
    MDCTextFieldHelperText:MDCTextFieldHelperText,
    MDCTextFieldIcon:MDCTextFieldIcon,
    MDCTopAppBar:MDCTopAppBar
};

/**
 * Crear una nueva directiva
 * @class
 */
class __directive{
    /**
     * @constructor
    */
    constructor(options){
        
        this.el = options.el || null;
        
        this.mdc = options.mdc || null;
        
        this.EventEmitter = new EventEmitter();
        
        this.elInits = [];
        
        Object.entries(directives).forEach(function([key,value]){
            
            if( typeof value.el != "undefined" ){
                
                const el = value.el;
                
                const view = value.view;
                
                const els = this.el.querySelectorAll(el)
                
                if( els.length > 0 ){

                    els.forEach((_els)=>{
                        
                        if( !(_els.getAttribute("id") == null)  ){

                            this.elInits.push( 
                                new view( { 
                                    el : _els , 
                                    mdc :  this.mdc 
                                } ) 
                            );

                        }    
                    });

                }

            }

        }.bind(this));
        // -------------------------------------------------------------------------------
        this.elInits.forEach((elInit)=>{

            if( !_.isNull(elInit) ){

                if( elInit.listenTo.length > 0 ){
                if( _.isFunction( elInit.listenTo.forEach ) ){ 
                   
                    elInit.listenTo.forEach((_listenTo)=>{
                        /**
                         * @const _name_function
                         * @type {string}
                         * @description 
                         */
                        const _name_function = _listenTo[0];
                        /**
                         * @const view_connect
                         * @type {string}
                         * @description
                         */
                        const view_connect =  _listenTo[1].split(":");
                        /**
                         * @const view_connect_id
                         * @type {string}
                         * @description
                         */
                        const view_connect_id = view_connect[0];
                        /**
                         * @const view_connect_event
                         * @type {string}
                         * @description
                         */
                        const view_connect_event = view_connect[1];
                        /**
                         *@var elInitsFind
                         *@type {array}
                         *@description
                         */
                        var elInitsFind = this.elInitsFind(view_connect_id)
                        // ---------------------------------------------------------
                        if( elInitsFind.length == 1 ){
                            
                            if( _.isFunction( elInit[_name_function] ) ){

                                elInitsFind[0].Events.on(

                                    view_connect_event,
    
                                    elInit[_name_function].bind(elInit)
    
                                )
                                
                            }

                        }
                        // ---------------------------------------------------------
                    })
                }    
                }

            }

        })
        // -------------------------------------------------------------------------------

    }
    /**
     * @function elInitsFind
     * @param id { string } - Id de la view que se desea buscar
     * @return { Backbone.View }
    */
    elInitsFind(id){

      return _.filter(this.elInits,(elInit)=>{

            return elInit.id == id;

      });
      
    }

}

return __directive;
    
});