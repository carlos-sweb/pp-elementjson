const MiSistemaClientesModalSettings = ""+
`<div id='modalSettings' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'>
  <div class='modal-dialog modal-lg modal-dialog-scrollable'>
    <div class='modal-content'>
     	<div class='modal-header' >
     		<h5 class='modal-title'>Configuración de la tabla</h5>
     		<button type='button' class='close' data-dismiss='modal' aria-label='Close'>
          		<span aria-hidden='true'>&times;</span>
    		</button>
     	</div>
     	<div class='modal-body' >
     		<form class='row' >
     			<fieldset class='form-group col-12 col-sm-6' >
	     			<div class='row' >
	     				<legend class="col-form-label col-sm-3 pt-0">Tema</legend>
	     				<div class="col-sm-9" >
	     					<div class="form-check" >
	     						<input v-model="settings.theme" class="form-check-input" type="radio" value="table-dark" id="tema-oscuro" />
	     						<label class="form-check-label" for="tema-oscuro">Oscuro</label>
	     					</div>
	     					<div class="form-check" >
	     						<input v-model="settings.theme" class="form-check-input" type="radio" value="table-light" id="tema-claro"/>
	     						<label class="form-check-label" for="tema-claro">Claro</label>
	     					</div>
	     					<div class="form-check" >
	     						<input v-model="settings.theme" class="form-check-input" type="radio" value="" id="tema-ninguno" />
	     						<label class="form-check-label" for="tema-ninguno">Ninguno</label>
	     					</div>
	     				</div>
	     			</div>
     			</fieldset>
     			<fieldset class='form-group col-12 col-sm-6' >
	     			<div class='row' >
	     				<legend class="col-form-label col-sm-3 pt-0">Estilo</legend>
	     				<div class="col-sm-9" >
	     					<div class="form-check" >
	     						<input v-model="settings.style" class="form-check-input" type="radio" value="table-sm" id="tema-normal" />
	     						<label class="form-check-label" for="tema-normal">Compacto</label>
	     					</div>
	     					<div class="form-check" >
	     						<input v-model="settings.style" class="form-check-input" type="radio" value="" id="tema-compacto"/>
	     						<label class="form-check-label" for="tema-compacto">Normal</label>
	     					</div>
	     				</div>
	     			</div>
     			</fieldset>
     			<fieldset class='form-group col-12 col-sm-6' >
	     			<div class='row' >
	     				<legend class="col-form-label col-sm-3 pt-0">Ajustes</legend>
	     				<div class="col-sm-9" >
	     					<div class="form-check" >
	     						<input v-model="settings.bordered" class="form-check-input" type="checkbox" value="table-sm" id="tema-border" />
	     						<label class="form-check-label" for="tema-border">Bordeado</label>
	     					</div>
	     					<div class="form-check" >
	     						<input v-model="settings.hover" class="form-check-input" type="checkbox" value="" id="tema-hover"/>
	     						<label class="form-check-label" for="tema-hover">Desplazamiento de tabla</label>
	     					</div>
	     				</div>
	     			</div>
     			</fieldset>
     
     			<fieldset class='form-group col-12 col-sm-6' >
	     			<div class='row' >
	     				<legend class="col-form-label col-sm-3 pt-0">Cabecera</legend>
	     				<div class="col-sm-9" >
	     					<div class="form-check" >
	     						<input v-model="settings.thead" class="form-check-input" type="radio" value="thead-dark" id="tema-thread-dark" />
	     						<label class="form-check-label" for="tema-thread-dark">Oscuro</label>
	     					</div>
	     					<div class="form-check" >
	     						<input v-model="settings.thead" class="form-check-input" type="radio" value="thead-light" id="tema-thread-light"/>
	     						<label class="form-check-label" for="tema-thread-light">Claro</label>
	     					</div>
	     					<div class="form-check" >
	     						<input v-model="settings.thead" class="form-check-input" type="radio" value="" id="tema-thread-ninguno"/>
	     						<label class="form-check-label" for="tema-thread-ninguno">Ninguno</label>
	     					</div>
	     				</div>
	     			</div>
     			</fieldset>

     			<fieldset class='form-group col-12 col-sm-6' >
	     			<div class='row' >
	     				<legend class="col-form-label col-sm-3 pt-0">Cabecera</legend>
	     				<div class="col-sm-9" >
	     					<div class="form-check" >
	     						<input v-model="settings.theadUp" class="form-check-input" type="checkbox" id="tema-thread-up" />
	     						<label class="form-check-label" for="tema-thread-up">Arriba</label>
	     					</div>
	     					<div class="form-check" >
	     						<input v-model="settings.theadDown" class="form-check-input" type="checkbox" id="tema-thread-down"/>
	     						<label class="form-check-label" for="tema-thread-down">Abajo</label>
	     					</div>
	     				</div>
	     			</div>
     			</fieldset>			
     		</form>

     	</div>
     	<div class='modal-footer'>
     		<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button>
        	<!--<button type='button' class='btn btn-primary'>Guardar Cambios</button>-->
     	</div>
    </div>
  </div>
</div>`;

const MiSistemaClientesModalDeleteItems = `
<!-- Modal -->
<div class="modal fade" id="modalDeleteItems" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Eliminar Cliente</h5>
        <button v-bind:disabled="deleteItem.process" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿&nbsp;Esta seguro de eliminar este cliente&nbsp;?</p>
		<div class="alert alert-danger" role="alert">
			Advertencia este cambio es permanente
		</div>
      </div>
      <div class="modal-footer">
        <button v-bind:disabled="deleteItem.process" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
		<button 
				v-bind:disabled="deleteItem.process" 
				type="button" 
				class="btn btn-danger" 
				v-on:click="onDeleteItem" >
					<span 
							v-if="deleteItem.process" 
							class="spinner-border spinner-border-sm" 
							role="status" aria-hidden="true"></span>&nbsp;
					<span v-if="!deleteItem.process" >Eliminar</span>
					<span v-if="deleteItem.process" >Eliminando</span>
		</button>
	  </div>
    </div>
  </div>
</div>
`;

const MiSistemaClientesModalCreateItems = `
<!-- Modal -->
<div class="modal fade" id="modalCreateItems" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Crear Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

		<b-card no-body>
		    <b-tabs card>
		      <b-tab title="General" active>
		      <b-card-text>

				<form>
				
				<div class="form-group">
					<label for="rut_cliente">R.U.T  {{itemAdd.rut_cliente}}</label>
					<input v-rut type="text" v-model="itemAdd.rut_cliente" class="form-control" id="rut_cliente" aria-describedby="">
				</div>

				<div class="form-group">
				<label for="nombre">Nombre</label>
				<input type="text" class="form-control" id="nombre" >
				</div>

					<div class="form-group">
				<label for="giro">Giro</label>
				<input type="text" class="form-control" id="giro" >
				</div>

				<!--<button type="button" class="btn btn-warning">Editar</button>-->
				</form>


		      </b-card-text></b-tab>
		      <b-tab title="Dirección">
		      <b-card-text>


		      	<form>
				
				<div class="form-group">
					<label for="direccion">Dirección</label>
					<input type="text" class="form-control" id="direccion" aria-describedby="">
				</div>

				<div class="form-group">
				<label for="ciudad">Ciudad</label>
				<input type="text" class="form-control" id="ciudad" >
				</div>

					<div class="form-group">
				<label for="comuna">Comuna</label>
				<input type="text" class="form-control" id="comuna" >
				</div>

				<!--<button type="button" class="btn btn-warning">Editar</button>-->
				</form>



		      </b-card-text></b-tab>
		      <b-tab title="Contacto">
		      <b-card-text>

		      	<form>

					<div class="form-group">
						<label for="telefono">Teléfono</label>
						<input type="text" class="form-control" id="telefono" aria-describedby="">
					</div>

					<div class="form-group">
						<label for="e_mail">E-Mail</label>
						<input type="email" class="form-control" id="e_mail" >
					</div>

					<div class="form-group">
						<label for="fax">Fax</label>
						<input type="text" class="form-control" id="fax" >
					</div>

					<!--<button type="button" class="btn btn-warning">Editar</button>-->

				</form>


		      </b-card-text></b-tab>
		    </b-tabs>
		</b-card>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-warning">Crear</button>
      </div>
    </div>
  </div>
</div>
`;

const MiSistemaClientesModalEditItems = `
<!-- Modal -->
<div class="modal fade" id="modalEditItems" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

		<b-card no-body>
		    <b-tabs card>
		      <b-tab title="General" active>
		      <b-card-text>

				<form>
				
				<div class="form-group">
					<label for="rut_cliente">R.U.T</label>
					<input v-model="itemEdit.rut_cliente" type="text" class="form-control" id="rut_cliente" aria-describedby="">
				</div>

				<div class="form-group">
				<label for="nombre">Nombre</label>
				<input v-model="itemEdit.nombre" type="text" class="form-control" id="nombre" >
				</div>

					<div class="form-group">
				<label for="giro">Giro</label>
				<input v-model="itemEdit.giro" type="text" class="form-control" id="giro" >
				</div>

				<button type="button" class="btn btn-warning">Editar</button>
				</form>


		      </b-card-text></b-tab>
		      <b-tab title="Dirección">
		      <b-card-text>


		      	<form>
				
				<div class="form-group">
					<label for="direccion">Dirección</label>
					<input v-model="itemEdit.direccion" type="text" class="form-control" id="direccion" aria-describedby="">
				</div>

				<div class="form-group">
				<label for="ciudad">Ciudad</label>
				<input v-model="itemEdit.ciudad" type="text" class="form-control" id="ciudad" >
				</div>

					<div class="form-group">
				<label for="comuna">Comuna</label>
				<input v-model="itemEdit.comuna" type="text" class="form-control" id="comuna" >
				</div>

				<button type="button" class="btn btn-warning">Editar</button>
				</form>



		      </b-card-text></b-tab>
		      <b-tab title="Contacto">
		      <b-card-text>

		      	<form>

					<div class="form-group">
						<label for="telefono">Teléfono</label>
						<input v-model="itemEdit.telefono" type="text" class="form-control" id="telefono" aria-describedby="">
					</div>

					<div class="form-group">
						<label for="e_mail">E-Mail</label>
						<input v-model="itemEdit.e_mail" type="email" class="form-control" id="e_mail" >
					</div>

					<div class="form-group">
						<label for="fax">Fax</label>
						<input type="text" class="form-control" id="fax" >
					</div>

					<button type="button" class="btn btn-warning">Editar</button>

				</form>


		      </b-card-text></b-tab>
		    </b-tabs>
		</b-card>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <!--<button type="button" class="btn btn-warning">Editar</button>-->
      </div>
    </div>
  </div>
</div>
`;

const MiSistemaClientesTemplateSearchOptions =""+ `
					<!-- columna  de busqueda-->
					<div class='col' >
						<div class='row' style='padding-bottom:10px;'>
						<input 
								buscar="true" 
								placeholder='Buscar...' 
								v-on:keyup='callFind($event)'  
								class='form-control' />
						</div>
					</div>
					<!-- columna de busqueda-->
					<!--columna de btotal Filtrados->
					<div class='col'  >
						<div class='row ' style='padding-bottom:10px;' >
							<span style="margin-top:7px;"><i><b>Total filtrados ( {{table.totalDataSearch}} )</b></i></span>&nbsp;
						</div>
					</div>
					<!--columna de total Filtrados-->		
					<!--columna de-->
					<div class="col">
					<div class="row" >
						<form class="col-12 col-sm-12 col-md-6 col-lg-6">
							<div class="form-group row">
								<label for="searchPer" class="col-2 col-sm-2 col-md-2 col-lg-2 col-form-label" style="padding-left:0px;" >Por:&nbsp;</label>
								<div class="col-10 col-sm-10 col-md-10 col-lg-10" style="padding-right:0px;" >
									<select v-on:change='callFind($event)' v-model="table.searchPer" class="form-control" id="searchPer">
										<option  v-for="option in fields" v-bind:value="option.text" >{{option.name}}</option>
									</select>
								</div>	
							</div>
						</form>
						<form class="col-12 col-sm-12 col-md-6 col-lg-6">
						<div class="form-group row" >
						<label  class="col-2 col-sm-2 col-md-2 col-lg-2 col-form-label" style="padding-left:0px;" >&nbsp;</label>
							<div class="col-10 col-sm-10 col-md-10 col-lg-10" style="padding-right:0px;" >
								<select class="form-control"  v-on:change="callFind($event)" v-model="table.howSearch" >
									<option value="contenga" >Que Contenga&nbsp;</option>
									<option value="comience" >Que Comience&nbsp;</option>
									<option value="termine"  >Que Termine&nbsp;</option>
								</select>
							</div>	
						</div>
						</form>
					</div>
					</div>
					<!--columna de -->
						
`;

const MiSistemaClientesTemplateHeaderTableThead = ""+
					"<tr>"+
						"<th scope='col' style='width:20px;'>#</th>"+
						"<th scope='col' v-for='field in fields' v-bind:class=\"_.indexOf(['direccion','rut_cliente'],field.text) != -1 ? 'ci-hide-xs':''  \"   v-bind:style=\"field.text == 'rut_cliente' ? { width: '140px' }:{}\">{{field.name}}</th>"+
						"<th scope='col' style='width:40px;'></th>"+
						"<th scope='col' style='width:40px;'></th>"+
					"</tr>";

const MiSistemaClientesTemplateHeaderTableUp = ""+
					"<thead v-show='settings.theadUp' v-bind:class='[settings.thead]' >"+
					MiSistemaClientesTemplateHeaderTableThead+
					"</thead>";

const MiSistemaClientesTemplateHeaderTableDown = ""+
					"<thead v-show='settings.theadDown' v-bind:class='[settings.thead]' >"+
					MiSistemaClientesTemplateHeaderTableThead+
					"</thead>";					

const MiSistemaClientesTemplatePaginationOne =""+`
<div class='row' style="padding-bottom:10px;"  >
	<div class='col-3' style="display:flex;flex-direction:column;justify-content:center;align-items:baseline;" >
		<button 
				v-on:click='showModal(\"modalCreateItems\",\"default\")' 
				type='button' 
				class='btn btn-success' style="height:40px;" ><i class='material-icons' >add</i></button>
	</div> 
	<div class='col' > 
		<form class="form-inline float-right" >
		<label>Página&nbsp;
		<select 
				class='form-control' 
				v-on:change='callPorPageOrRow' 
				v-model='table.page' >
		<option v-for='n in table.totalPage' >{{n}}</option></select>
		</label>&nbsp;
		<label>&nbsp;Filas por Página&nbsp;
			<select 
					class='form-control' 
					v-on:change='callPorPageOrRow' 
					v-model='table.perRow' >
						<option v-for='opt in table.optionsPerRow' >{{opt}}</option>
			</select>
		</label>
		</form>
	</div>
</div>
`;

const MiSistemaClientesTemplate = "<div class='container-fluid'>"+
	"<div class='row'>"+
		"<div class='col-sm' style='padding:10px;' >"+
			"<div class='card mdc-elevation--z1 animated fadeIn delay-1s'>"+
				"<div class='card-header'>"+
				"<span>Maestro de Clientes</span>&nbsp;<span class='ci-hide-xs' >/</span><b class='ci-hide-xs' ><i style='font-size:14px;'>Total de clientes ( {{clientes.length}} )</i></b>"+
				"<i class='material-icons float-right' style='color:#37474F;cursor:pointer;' v-on:click='showModal(\"modalSettings\")' >settings</i>"+
				"<b class='ci-hide ci-show-xs' ><i style='font-size:14px;'>Total de clientes ( {{clientes.length}} )</i></b>"+
				"</div>"+
			"<div class='card-body' style='overflow: auto'>"+
					MiSistemaClientesTemplateSearchOptions+
					MiSistemaClientesTemplatePaginationOne+
					//table-bordered
					"<table "+
						"v-bind:class='[settings.theme,settings.style,"+
						"{\"table-bordered\":settings.bordered},"+
						"{\"table-hover\":settings.hover},{\"table-striped\":settings.striped}]' "+
						"class='table'><!--es para que el thead de abajo no suba--><thead></thead>"+
					MiSistemaClientesTemplateHeaderTableUp+
					"<tbody >"+
					"<tr  v-for='(item,index) in clientesTmpView' >"+
						"<th scope='row' >{{(index+1)+(table.page*table.perRow)-table.perRow}}</th>"+
						"<td>{{item.nombre|lowerCase|cut(30)}}</td>"+
						"<td class='ci-hide-xs' >{{item.rut_cliente}}</td>"+
						"<td class='ci-hide-xs' >{{item.direccion}}</td>"+
						"<td>"+
						// Acciones
							"<span v-on:click='showModal(\"modalEditItems\",\"default\",showEditItems.bind(this,item),null)' class='material-icons' style='color:#F57F17;cursor:pointer;' >edit</span>"+
						// Acciones
						"</td>"+
						"<td>"+
						// Acciones
							"<span v-on:click='showModal(\"modalDeleteItems\",\"default\")' class='material-icons' style='color:#DD2C00;cursor:pointer;' >delete</span>"+
						// Acciones
						"</td>"+
					"</tr>"+
					"<tr v-show='table.totalDataSearch == 0' ><td style='text-align:center;'  v-bind:colspan='fields.length+3' > <span><strong><i style='font-size:48px;' class='material-icons' >sentiment_very_dissatisfied</i></strong></span> </td></tr>"+
					"<tr v-show='table.totalDataSearch == 0' ><td style='text-align:center;'  v-bind:colspan='fields.length+3' > <span><strong>Sin Resultados</strong></span> </td></tr>"+
					"</tbody>"+
					MiSistemaClientesTemplateHeaderTableDown+
					"</table>"+
					MiSistemaClientesTemplatePaginationOne+
			"</div>"+
			"</div>"+
		"</div>"+
	"</div>"+
	MiSistemaClientesModalSettings+
	MiSistemaClientesModalDeleteItems+
	MiSistemaClientesModalEditItems+
	MiSistemaClientesModalCreateItems+
"</div>"

const MiSistemaClientes = {
	  path:"/clientes",
	  component:{
	  	data:function(){
	  		return {
				itemAdd:{
					rut_cliente:""
				},  
	  			default:{
	  				modalSettings:{
						show:true,
						backdrop:"static",
						keyboard:false
	  				}
	  			},
	  			deleteItem:{
	  				success:null, // null ( inictializado ) , false, true
	  				process:false
	  			},
	  			itemEdit:[],
	  			settings:{ 				
	  				style:"",
	  				theme:"table-light",
	  				bordered:true,
	  				hover:true,
	  				striped:false,
	  				thead:"thead-light",
	  				theadUp:true,
	  				theadDown:true,
	  				decapiteBottom:false,
	  			},
	  			table:{
	  				optionsPerRow:[5,10,15,20],
	  				perRow:5,
	  				page:1,
	  				totalPage:1,
	  				totalDataSearch:0,
	  				search:"",
	  				searchPer:"nombre",
	  				howSearch:"contenga",
	  				howSearchOptions:[
	  					"contenga",
	  					"comience",
	  					"termine"
	  				]
	  			},
	  			clientesTmp:[],
	  			clientesTmpView:[],
	  			clientes:ClientesLong,

	  			fields:[{
	  				name:"Nombre",
	  				text:"nombre"
	  			},{
	  				name:"R.U.T",
	  				text:"rut_cliente"
	  			},{
	  				name:"Dirección",
	  				text:"direccion"
	  			}]

	  		}
	  	},
	  	methods:{
	  		
	  		onDeleteItem(){
	  			this.deleteItem.process = true;
	  			_.delay(  () => { this.deleteItem.process = false; }  ,1400);
	  		},

	  		showModal(elementId,settings,beforeModal,afterModal){
				
				_.isFunction(beforeModal) && (   beforeModal()  );

	  			let element = $("#"+elementId)

	  			if( element.length == 1  ){
	  				element.modal(   
	  					_.isUndefined(settings) ? this.default.modalSettings : 
	  					(  settings == "default" ? this.default.modalSettings : settings  )    
	  				);
	  			}

	  			_.isFunction(afterModal) && (  afterModal()   ) ;
	 
	  		},

	  		showEditItems(item,next){
	  		 	!_.isUndefined(item) && (  this.itemEdit =  _.clone(item)   );
	  		 	if(_.isFunction(next) ){next();};// Not Required
	  		},
	  		
	  		callPorPageOrRow: _.debounce(function(){
  				 this.createTmpView()
	  		},100,true),
	  		
	  		callFind:_.debounce(function(event){
	  		
	  			if(!_.isUndefined(event)){
	  			if( !_.isUndefined(event.target) ){
	  				if( event.target.getAttribute("buscar") == "true" ){
	  					this.table.search = _.clone(event.target.value);
	  				}
	  			}};
	  			
			    this.reloadViewDataTable(
			    	v.trim(_.clone(this.table.search))
			    );
	  		},300,false),
	  		
	  		reloadViewDataTable:function(find){

	  			 let __find = find

	  			 const __data = __find === "" ? _.clone(this.clientes) : _.filter(this.clientes,_.bind(function(cliente){
	  			 			
	  			 		switch(this.table.howSearch){
  			 				case "contenga":
  			 					return v.countSubstrings(v.lowerCase(cliente[this.table.searchPer]), v.lowerCase(__find)) === 0 ? false:true;	
  			 				break;
  			 				case "comience":	
  			 					return v.startsWith(v.lowerCase(cliente[this.table.searchPer]), v.lowerCase(__find),0);	
  			 				break;
  			 				case "termine":
  			 					return v.endsWith(v.lowerCase(cliente[this.table.searchPer]), v.lowerCase(__find));
  			 				break;
	  			 		}
	  			 		
	  			 		
	  			 },this));

	  			 this.clientesTmp = _.clone(__data);

	  			 this.table.totalDataSearch = _.clone(__data.length);
	  			 
	  			 this.createTmpView();

	  		},
	  		
	  		createTmpView:function(){

	  			 var total = Math.ceil(this.clientesTmp.length/this.table.perRow );
	  			 if( this.table.page > total ){
	  				this.table.page =  total == 0 ? 1 : _.clone(total);
	  			 };
	  			 this.table.totalPage = total == 0 ? 1 : _.clone(total);
	  			 const start = (this.table.page*this.table.perRow)-this.table.perRow;
	  			 this.clientesTmpView = _.clone(this.clientesTmp.slice(start, (this.table.page*this.table.perRow) )); 
	  		
	  		}
	  	},
	  	filters:{
	  		lowerCase:function(text){
	  			return  v.lowerCase(text);
	  		},
	  		cut:function(text,max){
	  			return v.count(text) >= max ?  v.truncate(text,max):text;
	  		}
	  	},
	  	mounted:function(){
	  		_.delay(_.bind(function(){
	  			this.callFind();	
	  		},this),500);
	  	},
	  	template:MiSistemaClientesTemplate
	  }
};