<?php
    require_once('../DBCredentials.php');
    $credentials = getCredentials();
    $db_host = 'localhost';
    $db_user = $credentials['db_user'];
    $db_pwd = $credentials['db_pwd'];

    $database = 'karldiab_ethereum';

    $con = mysql_connect($db_host,$db_user,$db_pwd);
    if (!$con)
    {
    die('Could not connect: ' . mysql_error());
    }
    
    mysql_select_db($db_user, $con);
    /*fetches multiple columns from a table
    //$table is the name of table as string
    //$columns is a string formatted for SQL query
    //ex $columns "cost, total, average" is valid
    returns a 2d array, outter array are the columns
    inner array are the values
    */
    function getColumns($table, $columns) {

        // sending query
        $result = mysql_query("SELECT {$columns} FROM {$table};");
        //echo "</script> SQL query:  SELECT {$columns} FROM {$table}; <script>";
        //$count = mysql_num_rows($result);
        if (!$result) {
            die("Query to show fields from table failed");
        }
        $columnsArray = array();
        while($row=mysql_fetch_array($result))
        {
            $counter = 0;
            foreach ($row as $cell) {
                $columnsArray[$counter][] = $cell;
                $counter++;
            }
        }
        mysql_free_result($result);
        return $columnsArray;
    }
    //fetches a single column without the date
    function getSingleColumn($table, $column) {

        // sending query
        $result = mysql_query("SELECT {$column} FROM {$table};");
        //$count = mysql_num_rows($result);
        if (!$result) {
            die("Query to show fields from table failed");
        }
        $columnArray = array();
        while($row=mysql_fetch_array($result))
        {
        $columnArray[]=$row[$column];
        //echo $row[$column] . "</br>";
        }
        mysql_free_result($result);
        return array($columnArray);
    }
    //fetches multiple columns from DB and puts results into multiple JS arrays
    //Both args are arrays, must be same size
    function echoJSArrays($columnsToFetch, $arrayNames) {
        $columnString = "";
        foreach ($columnsToFetch as $value) {
            $columnString = $columnString . $value . ",";
        }
        $columnString = rtrim($columnString, ",");
        $columnData = getColumns('karldiab_ethereum.blockAggregates',$columnString);
        $counter = 0;
        foreach ($arrayNames as $JSArray) {
            echo "</script> counter = $counter and $JSArray array contents: ";
            $echoString = "var $JSArray = [";
            foreach ($columnData[$counter] as $point) {
                echo $point . " , ";
                $echoString .= $point . ",";
            }
            echo "</br><script>";
            $echoString = rtrim($echoString, ",");
            $echoString .= "];";
            echo $echoString;
            $counter++;
        }
    }
    
?>