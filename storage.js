function iniciar(){
	var botonGrabar=document.getElementById('grabar');
	var botonEliminar=document.getElementById('eliminar');
	var botonEliminarTodo=document.getElementById('eliminarTodo');
	botonGrabar.addEventListener('click', nuevoitem, false);
	botonEliminar.addEventListener('click',eliminaritem,false);
	botonEliminarTodo.addEventListener('click',eliminartodos,false);
}
function nuevoitem(){
	//crea un item o modifica su valor
var clave=document.getElementById('clave').value;
var valor=document.getElementById('texto').value;
sessionStorage.setItem(clave,valor);
mostrar(clave);
}

function eliminaritem() {
	//Elimina un item
	var clave=document.getElementById('clave').value;
	if (confirm('¿Seguro que desea eliminar la variable ' + clave + '?')) {	
		sessionStorage.removeItem(clave);
		mostrar();
	}
}

function eliminartodos(){
//Elimina todos lo ítems
if (confirm('Esta acción eliminará todos los items, ¿Está seguro?')) {
	sessionStorage.clear();
	mostrar();
}
}
//Esta función mostrar sólo muestra una variable a la vez
/*function mostrar(clave){
var cajadatos=document.getElementById('cajadatos');
var valor=sessionStorage.getItem(clave);
cajadatos.innerHTML='<div>'+clave+' - '+valor+'</div>';
}*/

//Esta función mostrar, con un bucle muestra todas las variables almacenadas
function mostrar(){
	var cajadatos=document.getElementById('cajadatos');
	cajadatos.innerHTML='';
	//el for usa la proiedad length de sessionStorage que indica cuántos elementos tiene almacenados
	for(var f=0;f<sessionStorage.length;f++){
		var clave=sessionStorage.key(f);//Se puede acceder por la ubicación utilizando la función key que retorna la clave (nombre) de la variable
		var valor=sessionStorage.getItem(clave); //Una vez que se tiene el nombre, se procede a obtener el valor
		cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
	}
}

window.addEventListener('load', iniciar, false);