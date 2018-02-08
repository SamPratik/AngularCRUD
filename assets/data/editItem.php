<?php
  $data = json_decode(file_get_contents('php://input'));

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: PUT, GET, POST");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $connection = mysqli_connect("localhost", "root", "", "angularcrud");

  if(!empty($data)) {
    $title = $data->title;
    $description = $data->description;
    $itemId = $data->itemId;

    $update = "UPDATE items SET title='{$title}', description='{$description}' WHERE id={$itemId}";
    $result = mysqli_query($connection, $update);

    if($result) {
      echo json_encode('Updated Successfully!!');
    } else {
      echo json_encode('Failed to Update!!!');
    }
  }
?>
