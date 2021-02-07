<?php
require_once('conexion.php');
require_once('api.php');
require_once('cors.php');
$method = $_SERVER['REQUEST_METHOD'];

if($method == "GET") {
    if(!empty($_GET['id'])){
      $id = $_GET['id'];  
      $api = new Api();
      $obj = $api->getContBlog($id);
      $json = json_encode($obj);
      echo $json;     

    }else{
      $vector = array();
      $api = new Api();
      $vector = $api->getContBlogs();
      $json = json_encode($vector);
      echo $json;
    }
}

if($method=="POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $categoria = $data['categoria'];
    $titulo = $data['titulo'];
    $slug = $data['slug'];
    $desc1 = $data['desc1'];
    $desc2 = $data['desc2'];
    $img = $data['img'];
    $api = new Api();
    $json = $api->addContblog( $categoria, $titulo, $slug, $desc1, $desc2, $img);
    echo $json;
}

if($method=="DELETE"){
    $json = null;
    $id = $_REQUEST['id'];
    $api = new Api();
    $json = $api->deleteContBlog($id);
    echo $json;
}

if($method=="PUT"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);  
    $id = $data['id'];
    $categoria = $data['categoria'];
    $titulo = $data['titulo'];
    $slug = $data['slug'];
    $desc1 = $data['desc1'];
    $desc2 = $data['desc2'];
    $img = $data['img'];
    $api = new Api();
    $json = $api->updateContBlog($id, $categoria, $titulo, $slug, $desc1, $desc2, $img);
    echo $json;
}
?>