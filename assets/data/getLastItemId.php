<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");
  $dbHost = "localhost";
  $dbUser = "root";
  $dbPass = "";
  $dbName = "angularcrud";

  $connection = mysqli_connect($dbHost,$dbUser,$dbPass,$dbName);
?>

<?php
  $lastId = "SELECT id FROM items ORDER BY id DESC LIMIT 1";
  $resultId = mysqli_query($connection, $lastId);

  $rowId = mysqli_fetch_assoc($resultId);
  $id = $rowId['id'];
  echo json_encode($id);
?>
