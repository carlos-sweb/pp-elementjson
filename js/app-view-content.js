define(
    [ "backbone" , "jquery" , "underscore" ],
    function( Backbone , $ , _ ){
    
    const viewContent =  Backbone.View.extend({
        preinitialize:function(){

            this.Events = {};

            _.extend(this.Events, Backbone.Events);
    
        },
        initialize:function(){
            this.render();
        },
        render:function(){
            // load html base for panel
            this.$el.html(`
                
                <div class='col-xs center-xs' style='padding-top:40px;' >
                    <button 
                        ci-listento.prueba=\"topAppBarMain:nav\" 
                        class='mdc-button mdc-button--raised' 
                        id='clickme' >
                        <span class='mdc-button__ripple'></span>
                        <span class='mdc-button__label'>Button</span>
                    </button>


                    
                    <!--<button class="mdc-fab" aria-label="Favorite">
                        <div class="mdc-fab__ripple"></div>
                        <span class="mdc-fab__icon material-icons">favorite</span>
                    </button>-->
                </div>

                <div class='col-xs center-xs' >
                    <button id='btnIcon' class="mdc-icon-button material-icons">favorite</button>
                 </div>
                

                <div class='col-xs center-xs' >

                    <button id="mdcFab" class="mdc-fab" aria-label="Favorite">
                        <div class="mdc-fab__ripple"></div>
                        <span class="mdc-fab__icon material-icons">favorite</span>
                    </button>

                </div>

                <div class='col-xs center-xs' >


                <div class="mdc-chip-set" id="mdcchipset" role="grid">
                    <div class="mdc-chip" role="row">
                        <div class="mdc-chip__ripple"></div>
                            <span role="gridcell">
                            <span role="button" tabindex="0" class="mdc-chip__primary-action">
                            <span class="mdc-chip__text">Chip One</span>
                            </span>
                        </span>
                    </div>
                    <div class="mdc-chip" role="row">
                        <div class="mdc-chip__ripple"></div>
                        <span role="gridcell">
                            <span role="button" tabindex="-1" class="mdc-chip__primary-action">
                            <span class="mdc-chip__text">Chip Two</span>
                            </span>
                            </span>
                    </div>
                </div>

                </div>

                <div class="col-xs center-xs" >
        

<div class="mdc-data-table" id="mdcdatatable" >
  <table class="mdc-data-table__table" aria-label="Dessert calories">
    <thead>
      <tr class="mdc-data-table__header-row">
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
      </tr>
    </thead>
    <tbody class="mdc-data-table__content">
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Frozen yogurt</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Ice cream sandwich</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
        <td class="mdc-data-table__cell">I like ice cream more</td>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Eclair</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
        <td class="mdc-data-table__cell">New filing flavor</td>
      </tr>
    </tbody>
  </table>
</div>




                </div>


                <div class="col-xs center-xs" >
    
<button id="openmodal" class="mdc-button" >
     <div class="mdc-button__ripple"></div>
     <span class="mdc-button__label">Open Modal</span>
</button>  

<div class="mdc-dialog" id="dialogprueba" ci-listento.open="openmodal:click" >
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-content">
      <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
      <h2 class="mdc-dialog__title" id="my-dialog-title"><!--
     -->Dialog Title<!--
   --></h2>
      <div class="mdc-dialog__content" id="my-dialog-content">
        Dialog body text goes here.
      </div>
      <footer class="mdc-dialog__actions">
        <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">No</span>
        </button>
        <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Yes</span>
        </button>
      </footer>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>





                </div>




                <div class="col-xs center-xs" >
        

    <div 
        id="milineaprogress" 
        role="progressbar" 
        class="mdc-linear-progress" 
        aria-label="Example Progress Bar" aria-valuemin="20" aria-valuemax="1" aria-valuenow="0">
  <div class="mdc-linear-progress__buffering-dots"></div>
  <div class="mdc-linear-progress__buffer"></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>


                </div>


                <div class='col-xs center-xs' >
                    
                    <ul id="listadeprueba" class="mdc-list">
  <li class="mdc-list-item" tabindex="0">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
</ul>

                </div>

                <div class='col-xs center-xs' >
      

      <div class='ci-ripple' id="customripple"   style="width:400px;height:400px;" >
       <div class="mdc-ripple-surface"></div>
          <span>clickme</span>
      </div>


                </div>




                <div class="col-xs center-xs" >
      

      <div id="misnackbar" class="mdc-snackbar">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label"
         role="status"
         aria-live="polite">
      Can't send photo. Retry in 5 seconds.
    </div>
    <div class="mdc-snackbar__actions">
      <button type="button" class="mdc-button mdc-snackbar__action">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Retry</span>
      </button>
    </div>
  </div>
</div>


                </div>



                `);

            setTimeout( ()=> this.Events.trigger('ready') );

        }
    });
    
    return viewContent;
    
    });