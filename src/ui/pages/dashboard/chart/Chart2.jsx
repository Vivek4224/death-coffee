import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart2 extends Component {
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark1", // "light1", "dark1", "dark2"
            data: [
                {
                    type: "pie",
                    indexLabel: "{label}: {y}%",
                    startAngle: -90,
                    dataPoints: [
                        { y: 20, label: "PRODUCT 1" },
                        { y: 24, label: "PRODUCT 2" },
                        { y: 20, label: "PRODUCT 3" },
                        { y: 14, label: "PRODUCT 4" },
                        { y: 12, label: "PRODUCT 5" },
                        { y: 10, label: "PRODUCT 6" },
                    ],
                },
            ],
        };

        return (
            <div>
                <CanvasJSChart options={options} />
            </div>
        );
    }
}

export default Chart2;
