function iniciar(){
	var boton=document.getElementById('obtener');
	boton.addEventListener('click', obtener, false);
}
function obtener(){
	
	var geoconfig={
	//Con este arreglo se puede configurar parámetros para la función getCurrentPosition
	//Es opcional
		enableHighAccuracy: true,//precisión, es mejor falso porque ocupa muchos recursos
		timeout: 50000, //tiempo de espera para la respuesta. En milisegundos
		maximumAge: 60000 //almacenar caché de posiciones. Valor en milisegundos
	};	
	
	
	//getCurrentPosition, si captura los datos lanzará la función mostrar, si hay un error, lanzará la función errores
	//Sólo el primer parámetro es requerido para que funcione los otros dos son opcionales
	navigator.geolocation.getCurrentPosition(mostrar,errores);
	//navigator.geolocation.getCurrentPosition(mostrar,errores,geoconfig);
}

function mostrar(posicion){
	//Esta función es lanzada si el método getCurrentPosition tuvo éxito,
	//devuelve los valores obtenidos en la variable posición
	
	var ubicacion=document.getElementById('ubicacion');
	var datos='';
	datos+='Latitud: '+posicion.coords.latitude+'<br>';
	datos+='Longitud: '+posicion.coords.longitude+'<br>';
	datos+='Exactitud: '+posicion.coords.accuracy+'mts.<br>';
	ubicacion.innerHTML=datos;
	
	var mapurl='http://maps.google.com/maps/api/staticmap?center='+
posicion.coords.latitude+','+posicion.coords.longitude+'&zoom=16&size=400x400&sensor=false&markers='+posicion.coords.latitude+
','+posicion.coords.longitude;

	var mapa=document.getElementById('mapa');
	mapa.innerHTML='<img src="'+mapurl+'">';	
	
	
}

function errores(error){
	//Esta función es lanzada si el método getCurrentPosition falló
	//La variable error captura los códigos de error 0:No errores 1:PERMISSION_DENIED 2:POSITION_UNAVAILABLE 3:TIMEOUT
	alert('Error: '+error.code+' '+error.message);
}
window.addEventListener('load', iniciar, false);