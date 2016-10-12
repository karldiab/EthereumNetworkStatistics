<!DOCTYPE html>
<html lang="en">
	<head>
    <title>Ethereum Network Statistics</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js"></script>
    <script src="js/main.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-73629036-1', 'auto');
      ga('send', 'pageview');

    </script>
	</head>
<body>
    <div class="container">  
        <div id="header">
            <div id="bigTitle"><h2>Ethereum Mining Calculator</h2></div>
            <div id="smallTitle"><h4>Ethereum Mining Calculator</h4></div>
        </div>
        <div class="row">
            <div class="animated zoomInRight col-md-12">
                <canvas id="avgDiffChart" height="300px" width="600px"></canvas><br/>
            </div>
            <div class="animated fadeIn col-md-0">
            </div>
        </div>
    </div>
    <script>
        <?php
            require_once('DBActions.php');
            $avgDiffData = getColumn('karldiab_ethereum.blockAggregates','avgDiff','avgGasLimit');
            $xAxis = "var xAxis = [";
            foreach ($avgDiffData[0] as $xAxisPoint) {
                //echo "</script>" . $xAxisPoint . "<script>";
                $xAxis .= "'". $xAxisPoint . "',";
            }
            $xAxis = substr($xAxis, 0, -1);
            $xAxis .= "];";
            echo $xAxis;
            $yAxis1 = "var yAxis1 = [";
            foreach ($avgDiffData[1] as $yAxisPoint) {
                $yAxis1 .= (string)((int)$yAxisPoint/1000000) . ",";
            }
            $yAxis1 = substr($yAxis1, 0, -1);
            $yAxis1 .= "];";
            echo $yAxis1;
            $yAxis2 = "var yAxis2 = [";
            foreach ($avgDiffData[2] as $yAxisPoint) {
                $yAxis2 .= (string)((int)$yAxisPoint) . ",";
            }
            $yAxis2 = substr($yAxis2, 0, -1);
            $yAxis2 .= "];";
            echo $yAxis2;
        ?>
        //drawAvgDiffChart(xAxis, yAxis);
        drawAvgDiffChart(xAxis, yAxis1, yAxis2);
    </script>
</body>
</html>