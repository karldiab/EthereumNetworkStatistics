function drawAvgDiffChart(labelsToPlot, dataToPlot1, dataToPlot2) {
    
    var data = {
    labels: labelsToPlot,
    datasets: [
        {
            label: "Difficulty (Billion)",
            type: "bar",
            data: dataToPlot1
        },
        {
            label: "Gas Limit",
            type: "bar",
            data: dataToPlot2
        },
    ]
    };
    var ctx = document.getElementById("avgDiffChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
    data: data,
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
    });
}