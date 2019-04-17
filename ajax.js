/*
Prueba de Ajax.
Hace que se muestre el contenido del archivo texto.txt utilizando peticiones ajax.

El segundo botón carga un archivo y utiliza una barra de progreso para ver el estado de la descarga
*/

function iniciar(){
	cajadatos = document.getElementById('cajadatos');
	var boton = document.getElementById('boton');
	boton.addEventListener('click',leer,false);
	
	var btnVideo = document.getElementById('btnVideo');
	btnVideo.addEventListener('click',cargarVideo,false);	
	
}

function leer() {
	var url = 'texto.txt';
	var solicitud = new XMLHttpRequest();
	solicitud.addEventListener('load',mostrar,false);
	solicitud.open('GET',url,true);//métod de solicitud es get, el archivo a procesar es texto.txt(url) y el método es asíncrono (true)
	/*Una operación asíncrona significa que el navegador continuará procesando el resto del código mientras
espera que el archivo termine de ser descargado desde el servidor.El final de la operación será informado a
través del método load.*/
	solicitud.send(null);
}


function mostrar(e) {
	//cajadatos.innerHTML = e.target.responseText; //innerHTML no mantiene el formato del txt
	cajadatos.innerText = e.target.responseText;//innerText, mantiene el formato del txt
}

function cargarVideo() {
	var url = 'video.flv';
	var solicitud = new XMLHttpRequest();
	solicitud.addEventListener('loadstart',comenzar,false); //Evento cuando comienza la solicitud
	solicitud.addEventListener('progress',estado,false); //Evento disparado periódicamente mientras se envían o descargan datos
	solicitud.addEventListener('load',mostrarVideo,false);//Evento disparado cuando la solicitud ha sido completada
	solicitud.open('GET',url,true);
	solicitud.send(null);
}

function comenzar() {
	cajadatos.innerHTML='<progress value="0" max="100">0%</progress>';	
}

function estado(e) {
	if (e.lengthComputable) //lengthComputable Esta propiedad retorna true (verdadero) cuando el progreso puede ser calculado 
	{
		var por = parseInt(e.loaded / e.total * 100);
		//loaded Esta propiedad retorna el total de bytes ya subidos o descargados.
		//total Este propiedad retorna el tamaño total de los datos que están siendo subidos o descargados.
		
		var barraProgreso = cajadatos.querySelector('progress');
		barraProgreso.value = por;
		barraProgreso.innerHTML = por+'%';	
	}
}
function mostrarVideo(e) {
	cajadatos.innerHTML='<h1>Terminado</h1>';
}

window.addEventListener('load',iniciar,false);