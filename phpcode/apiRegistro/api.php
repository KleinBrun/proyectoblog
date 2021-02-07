<?php
class Api{
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
  if(isset($consulta)){
    echo "La consulta funcionó";
    return '1';
  }
  else{
      echo "La consulta NO funcionó";
  }

  //return '{"msg":"Usuarios Agregado Exitosamente"}';
}
}
?>