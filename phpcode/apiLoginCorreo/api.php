<?php
class Api{

public function getProductos(){

   $vector = array();
   $conexion = new Conexion();
   $db = $conexion->getConexion();
   $sql = "SELECT * FROM usuarios";
   $consulta = $db->prepare($sql);
   $consulta->execute();
   while($fila = $consulta->fetch()) {$vector[] = ( $fila['correo'] ); }
   return $vector;
}
}
?>