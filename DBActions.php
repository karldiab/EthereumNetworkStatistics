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
    while ($row = mysql_fetch_assoc($result)) {
        foreach ($row as $key => $cell) {
            $columnsArray[$key][] = $cell;
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
function echoJSArrays($columnsToFetch) {
    $columnString = "";
    foreach ($columnsToFetch as $value) {
        $columnString = $columnString . $value . ",";
    }
    $columnString = rtrim($columnString, ",");
    $columnData = getColumns('karldiab_ethereum.blockAggregates',$columnString);
    foreach ($columnsToFetch as $JSArray) {
        //echo "</script> $JSArray array contents: ";
        $echoString = "var $JSArray = [";
        foreach ($columnData[$JSArray] as $point) {
            if (!strcmp($JSArray,"date")) {
                //echo " This is the date column! :";
                $echoString .= "'" . $point . "' ,";
            } else {
                $echoString .= $point . ",";
            }
            //echo $point . " , ";
        }
        //echo "</br><script>";
        $echoString = rtrim($echoString, ",");
        $echoString .= "];";
        echo $echoString;
    }
}
//Takes all of the JS value arrays and places them
//into another array, axisArrayRaw
function echoJSAxisArrayRaw($columnsArray) {
    $echoString2 = "var axisArrayRaw = [";
    foreach ($columnsArray as $value) {
        //echo "</script>\$value is $value<script>";
        $echoString2 .= $value .  ",";
    }
    $echoString2 = rtrim($echoString2, ",");
    $echoString2 .= "];";
    
    echo $echoString2;
}
//creates a JS array containing the names of the columns fetched
function echoJSColumnNamesArray($columnNames) {
    $echoString2 = "var columnNames = [";
    foreach ($columnNames as $value) {
        //echo "</script>\$value is $value<script>";
        $echoString2 .= "'".$value .  "',";
    }
    $echoString2 = rtrim($echoString2, ",");
    $echoString2 .= "];";
    echo $echoString2;
}
?>