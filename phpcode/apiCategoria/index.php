<?php
require_once('conexion.php');
require_once('api.php');
require_once('cors.php');
$method = $_SERVER['REQUEST_METHOD'];

if($method == "GET") {
    if(!empty($_GET['id'])){
      $id = $_GET['id'];  
      $api = new Api();
      $obj = $api->getCate($id);
      $json = json_encode($obj);
      echo $json;     

    }else{
      $vector = array();
      $api = new Api();
      $vector = $api->getCates();
      $json = json_encode($vector);
      echo $json;
    }
}

if($method=="POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $idCategoria = $data['idCategoria'];
    $api = new Api();
    $json = $api->addCate($idCategoria);
    echo $json;
}

if($method=="DELETE"){
    $json = null;
    $id = $_REQUEST['id'];
    $api = new Api();
    $json = $api->deleteCate($id);
    echo $json;
}

if($method=="PUT"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $idCategoria = $data['idCategoria'];
    $api = new Api();
    $json = $api->updateCate($id, $idCategoria);
    echo $json;
}
?>