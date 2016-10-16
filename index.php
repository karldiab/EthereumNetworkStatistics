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
            <div id="bigTitle"><h2>Ethereum Network Statistics</h2></div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <button class="btn btn-primary" onclick="drawGraphs(7)">7 days</button>
                <button class="btn btn-primary" onclick="drawGraphs(30)">30 days</button>
                <button class="btn btn-primary" onclick="drawGraphs(90)">3 months</button>
                <button class="btn btn-primary" onclick="drawGraphs(180)">6 months</button>
                <button class="btn btn-primary" onclick="drawGraphs(365)">1 year</button>
                <button class="btn btn-primary" onclick="drawGraphs(-1)">All</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <canvas id="avgSizeChart"></canvas><br/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <canvas id="avgDiffChart"></canvas><br/>
            </div>
            <div class="col-md-6">
                <canvas id="dailyTxnsChart"></canvas><br/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <canvas id="gasLimitChart"></canvas><br/>
            </div>
            <div class="col-md-6">
                <canvas id="gasUsageChart"></canvas><br/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <canvas id="dailyUnclesChart"></canvas><br/>
            </div>
            <div class="col-md-6">
                <canvas id="dailyEmptyBlocksChart"></canvas><br/>
            </div>
        </div>
    </div>
    <script>
        <?php
            require_once('DBActions.php');
            $columnsToFetch = array('date','avgDiff','avgGasLimit','avgGasUsed','totalTxns','totalUncles','totalEmptyBlocks','avgBlockSize');
            echoJSArrays($columnsToFetch);
            echoJSAxisArray($columnsToFetch);
        ?>
        drawGraphs(30, axisArray);
    </script>
</body>
</html>