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
            <div id="bigTitle"><h1>Ethereum Network Statistics</h1></div>
        </div>
        <div class="row" id="controlPanel">
            <div class="col-sm-6">
                <h4>Time Period</h4>
                <button class="btn btn-primary" onclick="changeNumberOfDaysAndDraw(7)">7 days</button>
                <button class="btn btn-primary" onclick="changeNumberOfDaysAndDraw(30)">30 days</button>
                <button class="btn btn-primary" onclick="changeNumberOfDaysAndDraw(90)">3 months</button>
                <button class="btn btn-primary" onclick="changeNumberOfDaysAndDraw(180)">6 months</button>
                <button class="btn btn-primary" onclick="changeNumberOfDaysAndDraw(365)">1 year</button>
                <button class="btn btn-primary" onclick="changeNumberOfDaysAndDraw(-1)">All</button>
            </div>
            <div class="col-sm-6">
                <h4>Number of Data Points</h4>
                <button class="btn btn-primary" onclick="changeGranularityAndDraw(30)">30</button>
                <button class="btn btn-success" onclick="changeGranularityAndDraw(90)">90</button>
                <button class="btn btn-warning" onclick="changeGranularityAndDraw(180)">180</button>
                <button class="btn btn-danger" onclick="changeGranularityAndDraw(-1)">All</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4>Mining Difficulty</h4>
                <div id="avgDiffChartContainer">
                    <canvas id="avgDiffChart"></canvas><br/>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h3>Daily Transactions</h3>
                <div id="totalTxnsChartContainer">
                    <canvas id="totalTxnsChart"></canvas><br/>
                </div>
            </div>
            <div class="col-md-6">

                <h4>Average Block Size</h4>
                <div id="avgBlockSizeChartContainer">
                    <canvas id="avgBlockSizeChart"></canvas><br/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4>Gas Limit</h4>
                <div id="avgGasLimitChartContainer">
                    <canvas id="avgGasLimitChart"></canvas><br/>
                </div>
            </div>
            <div class="col-md-6">
                <h4>Gas Used Per Block</h4>
                <div id="avgGasUsedChartContainer">
                    <canvas id="avgGasUsedChart"></canvas><br/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4>Uncles Per Day</h4>
                <div id="totalUnclesChartContainer">
                    <canvas id="totalUnclesChart"></canvas><br/>
                </div>
            </div>
            <div class="col-md-6">
                <h4>Empty Blocks Per Day</h4>
                <div id="totalEmptyBlocksChartContainer">
                    <canvas id="totalEmptyBlocksChart"></canvas><br/>
                </div>
            </div>
        </div>
    </div>
    <script>
        <?php
            require_once('DBActions.php');
            $columnsToFetch = array('date','avgDiff','avgGasLimit','avgGasUsed','totalTxns','totalUncles','totalEmptyBlocks','avgBlockSize');
            //creates a JS array for each column queried
            echoJSArrays($columnsToFetch);
            //creates JS 2D array axisArrayRaw
            echoJSAxisArrayRaw($columnsToFetch);
            //creates columnNames JS array
            echoJSColumnNamesArray($columnsToFetch);
        ?>
        //console.log(columnNames);
        changeNumberOfDaysAndDraw(-1);
    </script>
</body>
</html>