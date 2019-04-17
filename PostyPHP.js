/*
Envía el nombre y el apellido ingresados en textos correspondientes
y devuelve el nombre unido
usando el método post hacia un scrip en php.
con ajax
*/

function iniciar() {
	cajaResultado = document.getElementById('boxRespuesta');
	var boton = document.getElementById('btnEnviar');
	boton.addEventListener('click',enviar,false);
	

}

function enviar() {
	//Descargamos en variables los datos de los controles html	
	var nombre = document.getElementById('txtNombre').value;
	var apellido = document.getElementById('txtApellido').value;
	
		
	var datos = new FormData(); //Creamos un objeto FormData que es un formulario virtual para pasar por POST
	datos.append('nombre',nombre); //Agregamos variables al formulario virtual con append (nombre,valor)
	datos.append('apellido',apellido); 
	
	var url = 'getNombreCompleto.php';
	var solicitud = new XMLHttpRequest();
	
	solicitud.addEventListener('load',mostrar,false);
	solicitud.open('POST',url,true);
	solicitud.send(datos); //Ahora en el send, enviamos como parámetro el formulario virtual
}

function mostrar(e) {
	cajaResultado.innerHTML = e.target.responseText; //La respuesta de php la tenemos en responseText
}

window.addEventListener('load',iniciar,false);