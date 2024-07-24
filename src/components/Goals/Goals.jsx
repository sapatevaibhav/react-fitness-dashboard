import React from "react";
import "./GoalsChart.css";
import ProgressChart from "./ProgressChart.jsx";
import GoalsChart from "./GoalsChart.jsx";

function Goals() {
  return (
    <div className="charts">
      <div className="progress-chart">
        <h2 className="header-2">Progress</h2>
        <div className="main-chart">
          <ProgressChart />
        </div>
      </div>
      <div className="goals-chart">
        <GoalsChart />
      </div>
    </div>
  );
}
export default Goals;
