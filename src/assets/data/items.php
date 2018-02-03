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
  $itemsArr = array();
  $query = "SELECT id, title, description FROM items";
  $result = mysqli_query($connection, $query);
  while($row = mysqli_fetch_assoc($result)) {
    $itemsArr[] = $row;
  }
  echo json_encode($itemsArr);
?>
