function drawLineChart(data, columnName, redraw) {

    var id = columnName + "Chart";
    console.log("id is "+id);
    if (redraw) {
        document.getElementById(id).remove();
        document.getElementById(id + "Container").innerHTML = "<canvas id='"+id+"'></canvas><br/>";
    }
    var ctx = document.getElementById(id).getContext("2d");
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawGraphs(numberOfDays, axisArray, columnNames, redraw) {
    if (numberOfDays < 1) {
        numberOfDays = axisArray[0].length;
    }
    var graphDataArray = generateGraphData(numberOfDays, axisArray);
    for (var i =0;i<graphDataArray.length;i++) {
        drawLineChart(graphDataArray[i], columnNames[i+1], redraw)
    }
}
function generateGraphData(numberOfDays, axisArray) {
    var graphDataArray = [
    {
        labels: axisArray[0].slice(axisArray[0].length - numberOfDays),
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
                data: axisArray[1].slice(axisArray[1].length - numberOfDays),
                spanGaps: false,
            }
        ]
        },
        {
            labels: axisArray[0].slice(axisArray[0].length - numberOfDays),
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
                    data: axisArray[2].slice(axisArray[2].length - numberOfDays),
                    spanGaps: false,
                }
            ]
            },
            {
                labels: axisArray[0].slice(axisArray[0].length - numberOfDays),
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
                        data: axisArray[3].slice(axisArray[3].length - numberOfDays),
                        spanGaps: false,
                    }
                ]
                },
                {
                    labels: axisArray[0].slice(axisArray[0].length - numberOfDays),
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
                            data: axisArray[4].slice(axisArray[4].length - numberOfDays),
                            spanGaps: false,
                        }
                    ]
                    },
                    {
                    labels: axisArray[0].slice(axisArray[0].length - numberOfDays),
                    datasets: [
                        {
                            label: "Uncles Per Day",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(149, 66, 244,0.4)",
                            borderColor: "rgba(149, 66, 244,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(149, 66, 244,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(149, 66, 244,1)",
                            pointHoverBorderColor: "rgba(149, 66, 244,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: axisArray[5].slice(axisArray[5].length - numberOfDays),
                            spanGaps: false,
                        }
                    ]
                    },
                    {
                        labels: axisArray[0].slice(axisArray[0].length - numberOfDays),
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
                                data: axisArray[6].slice(axisArray[6].length - numberOfDays),
                                spanGaps: false,
                            }
                        ]
                        },
                        {
                            labels: axisArray[0].slice(axisArray[0].length - numberOfDays),
                            datasets: [
                                {
                                    label: "Average Block Size",
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: "rgba(124, 10, 0,0.4)",
                                    borderColor: "rgba(124, 10, 0,1)",
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: "rgba(124, 10, 0,1)",
                                    pointBackgroundColor: "#fff",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: "rgba(124, 10, 0,1)",
                                    pointHoverBorderColor: "rgba(124, 10, 0,1)",
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: axisArray[7].slice(axisArray[7].length - numberOfDays),
                                    spanGaps: false,
                                }
                            ]
                            }
        ]
        return graphDataArray;
}
