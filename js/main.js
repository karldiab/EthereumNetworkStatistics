function drawAvgDiffChart(labelsToPlot, dataToPlot1, dataToPlot2) {
    
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Difficulty (Billion)",
            fill: false,
            type: "line",
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
            data: dataToPlot1,
            spanGaps: false,
        },
        {
            label: "Gas Limit",
            type: "bar",
            fillColor: "rgba(220,20,220,0.2)",
            strokeColor: "rgba(220,20,220,1)",
            pointColor: "rgba(220,20,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: dataToPlot2,
        }
    ]
    };
    var ctx = document.getElementById("avgDiffChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data

    });
}