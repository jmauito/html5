function iniciar(){
	cajadatos=document.getElementById('cajadatos');
	var archivos=document.getElementById('archivos');
	archivos.addEventListener('change', procesar, false);
}

function procesar(e){
	var archivos=e.target.files;
	
	var archivo=archivos[0];
	//Datos del archivo
	//Mostrar las propiedades del archivo	
	var mensaje = '<p>Archivo seleccionado</p>'+
						'Nombre : '+ archivo.name +'<br>'+
						'Tipo : '+ archivo.type +'<br>'+
						'Tamaño : ' + archivo.size +' bytes ('+ archivo.size / 1024 +'kilobytes)<br>';
	var propiedades = document.getElementById('cajapropiedades');
	propiedades.innerHTML=	mensaje;
	
	var lector=new FileReader();
	
	
	//Leer el contenido de un archivo como texto si el tipo es texto
	if (archivo.type.match(/text.*/i)) {
		lector.onload=mostrarTexto;	
		lector.readAsText(archivo);
		}
	//Leer el contenido de un archivo como url si es una imagen
	//No lo veo muy conveniente a no ser que se vaya a editar en la web
	if (archivo.type.match(/image.*/i)) {	
		lector.onload=mostrarImagen;
		lector.readAsDataURL(archivo);
		}
}

function mostrarTexto(e){
	var resultado=e.target.result;
	cajadatos.innerHTML=resultado;
}

function mostrarImagen(e){
	var resultado=e.target.result;
	cajadatos.innerHTML='<img src="'+resultado+'">';
}
window.addEventListener('load', iniciar, false);