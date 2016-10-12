<!DOCTYPE html>
<html lang="en">
	<head>
    <title>Ethereum Network Statistics</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js"></script>
    <script src="js/main.js"></script>
    <link rel="stylesheet" href="css/animate.min.css">
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
            <p style="text-align: center;">If you like this service, please consider disabling your ad blocker for this page. No pop-ups, I promise. ;)</p>
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
            $avgDiffData = getColumn('karldiab_ethereum.blockAggregates','avgDiff');
            $xAxis = "var xAxis = [";
            foreach ($avgDiffData[0] as $xAxisPoint) {
                //echo "</script>" . $xAxisPoint . "<script>";
                $xAxis .= "'". $xAxisPoint . "',";
            }
            $xAxis = substr($xAxis, 0, -1);
            $xAxis .= "];";
            echo $xAxis;
            $yAxis = "var yAxis = [";
            foreach ($avgDiffData[1] as $yAxisPoint) {
                $yAxis .= (string)((int)$yAxisPoint/1000000000) . ",";
            }
            $yAxis = substr($yAxis, 0, -1);
            $yAxis .= "];";
            echo $yAxis;
        ?>
        //drawAvgDiffChart(xAxis, yAxis);
        drawAvgDiffChart(xAxis, yAxis);
    </script>
</body>
</html>