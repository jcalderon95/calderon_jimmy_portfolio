<?php 
class Portfolio{
    private $conn;

    public $portfolio_table = 'tbl_projects';
    // public $portfolio_project = 'tbl_project';

    public function __construct($db){
        $this->conn = $db;
    }

    public function getProjectByID($id){
        $query = 'SELECT
        *
    FROM
        '.$this->portfolio_table.'
    WHERE
    ID= '.$id;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    public function getPortfolio(){
        $query = 'SELECT * FROM tbl_projects';

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }



}