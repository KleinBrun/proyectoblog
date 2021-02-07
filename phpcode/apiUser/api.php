<?php
class Api{

public function getProductos(){

   $vector = array();
   $conexion = new Conexion();
   $db = $conexion->getConexion();
   $sql = "SELECT * FROM usuarios";
   $consulta = $db->prepare($sql);
   $consulta->execute();
   while($fila = $consulta->fetch()) {
       $vector[] = array(
         "id" => $fila['id'],
         "nombre" => $fila['nombre'],
         "correo" => $fila['correo'],
         "pass" => $fila['pass'],
         "telefono" => $fila['telefono'],
         "tipouser" => $fila['tipouser'] );
         }
   return $vector;
}

public function getProducto($id){

  $vector = array();
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "SELECT * FROM usuarios WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->execute();
  while($fila = $consulta->fetch()) {
      $vector[] = array(
        "id" => $fila['id'],
        "nombre" => $fila['nombre'],
        "correo" => $fila['correo'],
        "pass" => $fila['pass'],
        "telefono" => $fila['telefono'],
        "tipouser" => $fila['tipouser'] );
        }

  return $vector[0];
}

public function addProducto($nombre, $correo, $pass, $telefono, $tipouser){
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "INSERT INTO usuarios (nombre, correo, pass, telefono, tipouser) VALUES (:nombre,:correo,:pass,:telefono,:tipouser)";
  $consulta = $db->prepare($sql);

  $consulta->bindParam(':nombre', $nombre);
  $consulta->bindParam(':correo', $correo);
  $consulta->bindParam(':pass', $pass);
  $consulta->bindParam(':telefono', $telefono);
  $consulta->bindParam(':tipouser', $tipouser);
  $consulta->execute();

  return '{"msg":"Usuarios Agregado Exitosamente"}';
}

public function deleteProducto($id){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "DELETE FROM usuarios WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id); 
  $consulta->execute();

  return '{"msg":"Usuarios Eliminado Exitosamente"}';
}

public function updateProducto($id, $nombre, $correo, $pass, $telefono, $tipouser){
  
  $conexion = new Conexion();
  $db = $conexion->getConexion();
  $sql = "UPDATE usuarios SET nombre=:nombre, correo=:correo, pass=:pass, telefono=:telefono, tipouser=:tipouser,fechamod=:fechamod WHERE id=:id";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':id', $id);  
  $consulta->bindParam(':nombre', $nombre);
  $consulta->bindParam(':correo', $correo);
  $consulta->bindParam(':pass', $pass);
  $consulta->bindParam(':telefono', $telefono);
  $consulta->bindParam(':tipouser', $tipouser);
  $consulta->bindParam(':fechamod', date('Y-m-d'));
  $consulta->execute();

  return '{"msg":"producto actualizado"}';
}
}
?>