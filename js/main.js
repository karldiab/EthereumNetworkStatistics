var numberOfDays = 30;
var granularity = 90;
var intentedGranularity = 90;
var axisArray = [];

function changeNumberOfDaysAndDraw(newNumber) {
    if (newNumber < 1) {
        numberOfDays = axisArrayRaw[0].length;
    } else {
        numberOfDays = newNumber;
    }
    if (numberOfDays > granularity) {
        console.log("intendedGranularity = " + intentedGranularity);
        changeGranularityAndDraw(intentedGranularity);
    } else {
        changeGranularityAndDraw(granularity);
    }

}
function changeGranularityAndDraw(newGranularity) {
    intentedGranularity = newGranularity;
    axisArray = null;
    axisArray = [];
    if (newGranularity < 1 || newGranularity >= numberOfDays) {
        //granularity = numberOfDays;
        for (i = 0; i<axisArrayRaw.length; i++) {
            axisArray[i] = axisArrayRaw[i].slice(axisArrayRaw[i].length - numberOfDays);
        }
        drawGraphs(1);
        return;
    } else {
        granularity = newGranularity;
    }
    var daysToAverage = Math.floor(numberOfDays/granularity);
    //set the first set of axis data to 0
    for (var j = 0;j<axisArrayRaw.length;j++) {
        //console.log("j equals " + j);
        axisArray[j] = [0];
    }
    //start at the end of the array
    var granularityCounter = 0;
    for (var i = axisArrayRaw[0].length-1;i >= axisArrayRaw[0].length-numberOfDays; i--) {
        for (var j = 1;j<axisArrayRaw.length;j++) {
            axisArray[j][0] += axisArrayRaw[j][i];
        }
        if (granularityCounter == daysToAverage) {
            for (var j = 1;j<axisArrayRaw.length;j++) {
                //averages all of the data inserted
                axisArray[j][0] /= daysToAverage;
                //insert 0 to front of all axis arrays
                axisArray[j].unshift(0);
            }
            //set the date for the average to be in the middle of the date range
            axisArray[0][0] = axisArrayRaw[0][Math.round(i+granularityCounter/2)];
            //console.log("axisArray[0][0] equals " + axisArray[0][0]);
            //console.log("i+granularityCounter/2 equals " + (i+granularityCounter/2));
            axisArray[0].unshift('');
            //set to -1 because it will increment after
            granularityCounter = -1;
        }
        granularityCounter++;
    }
    //if there is leftover data, throw it away
    if (granularityCounter != 0) {
        for (var j = 0;j<axisArray.length;j++) {
            axisArray[j].shift();
        }
    }
    drawGraphs(1);
}
function drawLineChart(data, columnName, redraw) {
    var ctx = null;
    var myLineChart = null;
    var id = columnName + "Chart";
    //console.log("id is "+id);
    if (redraw) {
        document.getElementById(id).remove();
        document.getElementById(id + "Container").innerHTML = "<canvas id='"+id+"'></canvas><br/>";
    }
    ctx = document.getElementById(id).getContext("2d");
    myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    });
}
function drawGraphs(redraw) {
    var graphDataArray = generateGraphData();
    for (var i =0;i<graphDataArray.length;i++) {
        drawLineChart(graphDataArray[i], columnNames[i+1], redraw)
    }
}
function generateGraphData() {
    var graphDataArray = [
    {
        labels: axisArray[0],
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
                data: axisArray[1],
                spanGaps: false,
            }
        ]
        },
        {
            labels: axisArray[0],
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
                    data: axisArray[2],
                    spanGaps: false,
                }
            ]
            },
            {
                labels: axisArray[0],
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
                        data: axisArray[3],
                        spanGaps: false,
                    }
                ]
                },
                {
                    labels: axisArray[0],
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
                            data: axisArray[4],
                            spanGaps: false,
                        }
                    ]
                    },
                    {
                    labels: axisArray[0],
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
                            data: axisArray[5],
                            spanGaps: false,
                        }
                    ]
                    },
                    {
                        labels: axisArray[0],
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
                                data: axisArray[6],
                                spanGaps: false,
                            }
                        ]
                        },
                        {
                            labels: axisArray[0],
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
                                    data: axisArray[7],
                                    spanGaps: false,
                                }
                            ]
                            }
        ]
        return graphDataArray;
}
