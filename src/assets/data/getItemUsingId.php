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
    $selectItem = "SELECT id, title, description FROM items WHERE id={$itemId}";
    $result = mysqli_query($connection, $selectItem);

    $row = mysqli_fetch_assoc($result);

    echo json_encode($row);
?>
