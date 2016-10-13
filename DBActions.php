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
    //fetches a column along with the ascoiated date
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
    //echos the returned x and y columns as JS arrays to be passed to plotter
    //$columnToFetch is obvious
    //$division factor is the factor to divide the y column by for display
    function echoJSPlotArraysBothAxis($columnToFetch, $divisionFactor) {
        $columnData = getColumn('karldiab_ethereum.blockAggregates',$columnToFetch);
        $xAxis = "var xAxis = [";
        foreach ($columnData[0] as $xAxisPoint) {
            //echo "</script>" . $xAxisPoint . "<script>";
            $xAxis .= "'". $xAxisPoint . "',";
        }
        $xAxis = substr($xAxis, 0, -1);
        $xAxis .= "];";
        echo $xAxis;
        $yAxis = "var yAxis = [";
        foreach ($columnData[1] as $yAxisPoint) {
            $yAxis .= (string)((int)$yAxisPoint/$divisionFactor) . ",";
        }
        $yAxis = substr($yAxis, 0, -1);
        $yAxis .= "];";
        echo $yAxis;
    }
    //fetches and echos a y column as JS arrays to be passed to plotter
    //$columnToFetch is obvious
    //$division factor is the factor to divide the y column by for display
    function echoJSPlotArraysYAxisOnly($columnToFetch, $divisionFactor) {
        $columnData = getSingleColumn('karldiab_ethereum.blockAggregates',$columnToFetch);
        $yAxis = "var yAxis = [";
        foreach ($columnData[0] as $yAxisPoint) {
            $yAxis .= (string)((int)$yAxisPoint/$divisionFactor) . ",";
        }
        $yAxis = substr($yAxis, 0, -1);
        $yAxis .= "];";
        echo $yAxis;
    }
?>