<?php


//$nombre = filter_input('POST', 'nombre', FILTER_SANITIZE_STRING );
//$apellido = filter_input('POST', 'apellido', FILTER_SANITIZE_STRING );


$nombre = filter_input(INPUT_POST, 'nombre',FILTER_SANITIZE_SPECIAL_CHARS);
$apellido = filter_input(INPUT_POST, 'apellido',FILTER_SANITIZE_SPECIAL_CHARS);
echo "<h1> Hola: $nombre $apellido</h1>";