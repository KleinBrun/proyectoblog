<?php
   function decrypt($string, $key) {
      $result = '';
      $string = base64_decode($string);
      for($i=0; $i<strlen($string); $i++) {
         $char = substr($string, $i, 1);
         $keychar = substr($key, ($i % strlen($key))-1, 1);
         $char = chr(ord($char)-ord($keychar));
         $result.=$char;
      }
      return $result;
   }

class Api{


public function getProductos(){

   $vector = array();
   $conexion = new Conexion();
   $db = $conexion->getConexion();
   $sql = "SELECT * FROM usuarios";
   $consulta = $db->prepare($sql);
   $consulta->execute();
   while($fila = $consulta->fetch()) {
      $key = '1010';
      $pasx= decrypt($fila['pass'],$key);
      $vector[] = ($pasx);}
   return $vector;
}
}
?>