<?php
  $data = json_decode(file_get_contents('php://input'));

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: PUT, GET, POST");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $connection = mysqli_connect("localhost", "root", "", "angularcrud");

  if(!empty($data)) {
    $sql = "INSERT INTO items (title, description) VALUES ('{$data->title}', '{$data->description}')";
    $result = mysqli_query($connection, $sql);
    if($result) {
      echo json_encode('success');
    } else {
      echo json_encode('failed');
    }
  }

  // echo json_encode($data->title . ' ' . $data->description);
?>
