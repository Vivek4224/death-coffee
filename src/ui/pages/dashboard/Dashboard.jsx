import React from 'react';
import './dashboard.css';
import Chart from './chart/Chart';
import Chart2 from './chart/Chart2';


export default function Dashboard() {
    return (
        <div>
            <div className="chart_container">
                <div style={{paddingBottom:"2rem"}}>
                    <Chart />
                </div>
                <div>
                    <Chart2 />
                </div>
            </div>
        </div>
    )
}
