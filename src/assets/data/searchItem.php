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
  $searchParam = $_GET['searchParam'];
  $arr = array();
  $search = "SELECT id, title, description FROM items WHERE title LIKE '%{$searchParam}%'";
  $result = mysqli_query($connection, $search);

  while($row = mysqli_fetch_assoc($result)) {
    $arr[] = $row;
  }

  echo json_encode($arr);
?>
