<?php
class Api{

public function getContBlogs(){

   $vector = array();
   $conexion = new Conexion();
   $db = $conexion->getConexion();
   $sql = "SELECT * FROM contenido";
   $consulta = $db->prepare($sql);
   $consulta->execute();
   while($fila = $consulta->fetch()) {
       $vector[] = array(
         "id" => $fila['id'],
         "categoria" => $fila['categoria'],
         "titulo" => $fila['titulo'],
         "slug" => $fila['slug'],
         "desc1" => $fila['desc1'],
         "desc2" => $fila['desc2'],
         "img" => $fila['img'] );
         }
   return $vector;
}

public function getContBlog($id){

  $vector = array();
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "SELECT * FROM contenido WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->execute();
  while($fila = $consulta->fetch()) {
      $vector[] = array(
        "id" => $fila['id'],
        "categoria" => $fila['categoria'],
         "titulo" => $fila['titulo'],
         "slug" => $fila['slug'],
         "desc1" => $fila['desc1'],
         "desc2" => $fila['desc2'],
         "img" => $fila['img'] );
        }

  return $vector[0];
}

public function addContblog($categoria, $titulo, $slug, $desc1, $desc2, $img){
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "INSERT INTO contenido (categoria, titulo, slug, desc1, desc2, img) VALUES (:categoria,:titulo,:slug,:desc1,:desc2,:img)";
  $consulta = $db->prepare($sql);

  $consulta->bindParam(':categoria', $categoria);
  $consulta->bindParam(':titulo', $titulo);
  $consulta->bindParam(':slug', $slug);
  $consulta->bindParam(':desc1', $desc1);
  $consulta->bindParam(':desc2', $desc2);
  $consulta->bindParam(':img', $img);
  $consulta->execute();

  return '{"msg":"Blog Agregado Exitosamente"}';
}

public function deleteContBlog($id){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "DELETE FROM contenido WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id); 
  $consulta->execute();

  return '{"msg":"Blog Eliminado Exitosamente"}';
}

public function updateContBlog($id, $categoria, $titulo, $slug, $desc1, $desc2, $img){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "UPDATE contenido SET categoria=:categoria, titulo=:titulo, slug=:slug, desc1=:desc1, desc2=:desc2, img=:img,fechamod=:fechamod WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->bindParam(':categoria', $categoria);
  $consulta->bindParam(':titulo', $titulo);
  $consulta->bindParam(':slug', $slug);
  $consulta->bindParam(':desc1', $desc1);
  $consulta->bindParam(':desc2', $desc2);
  $consulta->bindParam(':img', $img);
  $consulta->bindParam(':fechamod', date('Y-m-d'));
  $consulta->execute();

  print_r($id, $categoria, $titulo, $slug, $desc1, $desc2, $img);
}
}
?>