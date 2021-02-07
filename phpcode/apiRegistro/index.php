<?php
require_once('conexion.php');
require_once('api.php');
require_once('cors.php');
$method = $_SERVER['REQUEST_METHOD'];




function encrypt($string, $key) {
   $result = '';
   for($i=0; $i<strlen($string); $i++) {
      $char = substr($string, $i, 1);
      $keychar = substr($key, ($i % strlen($key))-1, 1);
      $char = chr(ord($char)+ord($keychar));
      $result.=$char;
   }
   return base64_encode($result);
}
if($method=="POST"){
    $data = json_decode(file_get_contents("php://input"), true);
    $key = '1010';
    $pass = encrypt($data['pass'],$key);
    $nombre = $data['nombre'];
    $correo = $data['correo'];
    $telefono = $data['telefono'];
    $tipouser = '2';
    $api = new Api();
    $json = $api->addProducto($nombre, $correo, $pass, $telefono, $tipouser);
    echo $json;
}
