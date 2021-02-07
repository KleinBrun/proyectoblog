<?php
class Api{

public function getCates(){

   $vector = array();
   $conexion = new Conexion();
   $db = $conexion->getConexion();
   $sql = "SELECT * FROM categorias";
   $consulta = $db->prepare($sql);
   $consulta->execute();
   while($fila = $consulta->fetch()) {
       $vector[] = array(
         "id" => $fila['id'],
         "idCategoria" => $fila['idCategoria']);
         }
   return $vector;
}

public function getCate($id){

  $vector = array();
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "SELECT * FROM categorias WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->execute();
  while($fila = $consulta->fetch()) {
    $vector[] = array(
      "id" => $fila['id'],
      "idCategoria" => $fila['idCategoria']);
      }
  return $vector[0];
}

public function addCate($idCategoria){
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "INSERT INTO categorias (idCategoria) VALUES (:idCategoria)";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':idCategoria', $idCategoria);
  $consulta->execute();

  return '{"msg":"Categoria Agregado Exitosamente"}';
}

public function deleteCate($id){
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "DELETE FROM categorias WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id); 
  $consulta->execute();

  return '{"msg":"Categoria Eliminado Exitosamente"}';
}

public function updateCate($id, $idCategoria){
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "UPDATE categorias SET idCategoria=:idCategoria WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->bindParam(':idCategoria', $idCategoria);
  $consulta->execute();

  return '{"msg":"Categoria actualizado"}';
}
}
?>