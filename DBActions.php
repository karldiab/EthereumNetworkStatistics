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
    function getColumn($table, $column) {

        // sending query
        $result = mysql_query("SELECT {$column}, date FROM {$table};");
        //$count = mysql_num_rows($result);
        if (!$result) {
            die("Query to show fields from table failed");
        }
        $columnArray = array();
        $datesArray = array();
        while($row=mysql_fetch_array($result))
        {
        $columnArray[]=$row[$column];
        $datesArray[]=$row['date'];
        //echo $row[$column] . "</br>";
        }
        mysql_free_result($result);
        return array($datesArray,$columnArray);
    }
    //getColumn('karldiab_ethereum.blockAggregates','avgDiff');
?>