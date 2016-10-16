function drawAvgDiffChart(labelsToPlot, dataToPlot) {
    for (var i =0;i<dataToPlot.length;i++) {
        dataToPlot[i] = dataToPlot[i]/1000000000000;
    }
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Average Difficulty (Trillion)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToPlot,
            spanGaps: false,
        }
    ]
    };
    var ctx = document.getElementById("avgDiffChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawGasLimitChart(labelsToPlot, dataToPlot) {
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Gas Limit",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 50, 50,0.4)",
            borderColor: "rgba(255, 50, 50,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 50, 50,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 50, 50,1)",
            pointHoverBorderColor: "rgba(255, 50, 50,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToPlot,
            spanGaps: false,
        }
    ]
    };
    var ctx = document.getElementById("gasLimitChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawGasUsedChart(labelsToPlot, dataToPlot) {
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Gas Used Per Block",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(250, 255, 0,0.4)",
            borderColor: "rgba(250, 255, 0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(250, 255, 0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(250, 255, 0,1)",
            pointHoverBorderColor: "rgba(250, 255, 0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToPlot,
            spanGaps: false,
        }
    ]
    };
    var ctx = document.getElementById("gasUsageChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawDailyTransactionsChart(labelsToPlot, dataToPlot) {
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Daily Transactions",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(80,209,0,0.4)",
            borderColor: "rgba(80,209,0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(80,209,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(80,209,0,1)",
            pointHoverBorderColor: "rgba(80,209,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToPlot,
            spanGaps: false,
        }
    ]
    };
    var ctx = document.getElementById("dailyTxnsChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawDailyUnclesChart(labelsToPlot, dataToPlot) {
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Uncles Per Day",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(80,209,0,0.4)",
            borderColor: "rgba(80,209,0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(80,209,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(80,209,0,1)",
            pointHoverBorderColor: "rgba(80,209,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToPlot,
            spanGaps: false,
        }
    ]
    };
    var ctx = document.getElementById("dailyUnclesChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawDailyEmptyBlocksChart(labelsToPlot, dataToPlot) {
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Empty Blocks Per Day",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(80,209,0,0.4)",
            borderColor: "rgba(80,209,0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(80,209,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(80,209,0,1)",
            pointHoverBorderColor: "rgba(80,209,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToPlot,
            spanGaps: false,
        }
    ]
    };
    var ctx = document.getElementById("dailyEmptyBlocksChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawAverageSizeChart(labelsToPlot, dataToPlot) {
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Average Block Size",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(80,209,0,0.4)",
            borderColor: "rgba(80,209,0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(80,209,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(80,209,0,1)",
            pointHoverBorderColor: "rgba(80,209,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataToPlot,
            spanGaps: false,
        }
    ]
    };
    var ctx = document.getElementById("avgSizeChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawGraphs(numberOfDays, axisArray) {
        drawAvgDiffChart(axisArray[0], axisArray[1]);
        drawGasLimitChart(axisArray[0], axisArray[2]);
        drawGasUsedChart(axisArray[0], axisArray[3]);
        drawDailyTransactionsChart(axisArray[0], axisArray[4]);
        drawDailyUnclesChart(axisArray[0], axisArray[5]);
        drawDailyEmptyBlocksChart(axisArray[0], axisArray[6]);
        drawAverageSizeChart(axisArray[0], axisArray[7]);
}