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

if($method == "GET") {
    if(!empty($_GET['id'])){
      $id = $_GET['id'];  
      $api = new Api();
      $obj = $api->getProducto($id);
      $json = json_encode($obj);
      echo $json;     

    }else{
      $vector = array();
      $api = new Api();
      $vector = $api->getProductos();
      $json = json_encode($vector);
      echo $json;
    }
}

if($method=="POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $nombre = $data['nombre'];
    $correo = $data['correo'];
    $key = '1010';
    $pass = encrypt($data['pass'],$key);
    $telefono = $data['telefono'];
    $tipouser = $data['tipouser'];
    $api = new Api();
    $json = $api->addProducto($nombre, $correo, $pass, $telefono, $tipouser);
    echo $json;
}

if($method=="DELETE"){
    $json = null;
    $id = $_REQUEST['id'];
    $api = new Api();
    $json = $api->deleteProducto($id);
    echo $json;
}

if($method=="PUT"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $nombre = $data['nombre'];
    $correo = $data['correo'];
    $key = '1010';
    $pass = encrypt($data['pass'],$key);
    $telefono = $data['telefono'];
    $tipouser = $data['tipouser'];
    $api = new Api();
    $json = $api->updateProducto($id, $nombre, $correo, $pass, $telefono, $tipouser);
    echo $json;
}
?>