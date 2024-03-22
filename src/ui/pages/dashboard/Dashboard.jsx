import React from "react";
import "./dashboard.css";
import Chart from "./chart/Chart";
import Chart2 from "./chart/Chart2";

export default function Dashboard() {
    return (
        <div>
            <div className="chart_container">
                <Chart />
                <div className="heading">
                    <h1 style={{ borderTop: "2px solid #9F2D36", borderBottom: "2px solid #9F2D36", padding: "1rem" }}>
                        YEARLY SALE
                    </h1>
                </div>
                <div>
                    <Chart2 />
                </div>
            </div>
        </div>
    );
}
