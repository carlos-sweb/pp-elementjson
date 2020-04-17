define([ 'backbone' , 'underscore' , 'jquery' , 'helper-directive' ],function( Backbone , _ , $ , helperDirective ){
    
    const classIden = '.mdc-list';

    const viewMDCList = Backbone.View.extend(_.extend({
        preinitialize:function(){

            this.mdcEl = null;

        },
        initialize:function(options){

            this.id = this.getId( this.el )

            this._listenTo = this.getListenTo( this.el )
            
            const Mdc = options.mdc || null;

            if( !_.isNull(this.mdc) ){

                this.mdcEl = new Mdc.list.MDCList( this.el )

            }

            this.$el.find(".mdc-list-item").on("click",(event)=>{
             
                this.trigger('itemclick');

            });

           
            this.render();

        },
        render:function(){

        }
  }, helperDirective ))


    return {view:viewMDCList,el:classIden};

});