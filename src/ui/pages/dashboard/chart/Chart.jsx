import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

var updateInterval = 500;
class Chart extends Component {
    constructor() {
        super();
        this.updateChart = this.updateChart.bind(this);
    }
    componentDidMount() {
        setInterval(this.updateChart, updateInterval);
    }
    updateChart() {
        var dpsColor,
            dpsTotal = 0,
            deltaY,
            yVal;
        var dps = this.chart.options.data[0].dataPoints;
        var chart = this.chart;
        for (var i = 0; i < dps.length; i++) {
            deltaY = Math.round(2 + Math.random() * (-2 - 2));
            yVal =
                deltaY + dps[i].y > 0
                    ? deltaY + dps[i].y < 100
                        ? dps[i].y + deltaY
                        : 100
                    : 0;
            dpsColor =
                yVal >= 90
                    ? "#88df86"
                    : yVal >= 70
                        ? "#81c2ea"
                        : yVal >= 50
                            ? "#ec7426"
                            : "#e40000 ";
            dps[i] = { label: "PRODUCT " + (i + 1), y: yVal, color: dpsColor };
            dpsTotal += yVal;
        }
        chart.options.data[0].dataPoints = dps;
        chart.options.title.text = "CURRENT SALE " + Math.round(dpsTotal / 6) + "%";
        chart.render();
    }
    render() {
        const options = {
            theme: "dark2",
            title: {
                text: "Live Sale",
            },
            subtitles: [
                {
                    text: "LIVE SALE CHART",
                },
            ],
            axisY: {
                title: "Live Sale",
                includeZero: true,
                suffix: "%",
                maximum: 100,
            },
            data: [
                {
                    type: "column",
                    yValueFormatString: "#,###'%'",
                    indexLabel: "{y}",
                    dataPoints: [
                        { label: "Product 1", y: 68 },
                        { label: "Core 2", y: 3 },
                        { label: "Core 3", y: 8 },
                        { label: "Core 4", y: 87 },
                        { label: "Core 5", y: 2 },
                        { label: "Core 6", y: 6 },
                    ],
                },
            ],
        };
        return (
            <div>
                <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
            </div>
        );
    }
}
export default Chart;
