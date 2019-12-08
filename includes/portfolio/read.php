<?php 
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: Application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/portfolio.php';

// instantiate database and movie object
$database = new Database();
$db = $database->getConnection();
$portfolio = new Portfolio($db);

if(isset($_GET['id'])){
    $stmt = $portfolio->getProjectByID($_GET['id']);
}else{
    $stmt = $portfolio->getPortfolio();
}

$num = $stmt->rowCount();

if($num > 0){
    $results = array();
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        $single_piece = $row;
        $results[] = $single_piece;
    }
    echo json_encode($results, JSON_PRETTY_PRINT);
}else{
    echo json_encode(
        array(
            'message'=>'No Data Found'
        )
    );
}