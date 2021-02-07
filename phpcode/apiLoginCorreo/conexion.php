<?php

class Conexion {
	
 public function getConexion(){
   $host = "localhost"; 
   $db = "dbblog"; 
   $user = "root"; 
   $password = "";       

//conexion a la base datos utilizando pdo
 $db = new PDO("mysql:host=$host;dbname=$db;", $user, $password);

  return $db;
}

}

?>