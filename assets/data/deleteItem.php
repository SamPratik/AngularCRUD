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
  $itemId = $_GET['id'];
  $deleteItem = "DELETE FROM items WHERE id={$itemId}";
  $result = mysqli_query($connection, $deleteItem);

  if($result) {
    echo json_encode('Successfully Deleted!');
  } else {
    echo json_encode('Failed to Delete!');
  }
?>
