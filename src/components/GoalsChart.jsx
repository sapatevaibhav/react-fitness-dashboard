import React from "react";
import "./GoalsChart.css";

function GoalsChart() {
  return (
    <div className="goal-chart">
      <div className="goals-header">
        <h2>Goal</h2>
        <button className="set-goal-button">set new fitness goal</button>
      </div>
      <div className="goal-item">
        <div className="text-container" align="center">
          <span className="main-text">Sleep at night</span>
          <span className="sub-text">progress</span>
          <span className="sub-text">20 nights in row</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "30%" }}></div>
        </div>
      </div>
      <div className="goal-item">
        <div className="text-container" align="center">
          <span className="main-text">Workout 5/7</span>
          <span className="sub-text">progress</span>
          <span className="sub-text">2 weeks in row</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%" }}></div>
        </div>
      </div>
      <div className="goal-item">
        <div className="text-container" align="center">
          <span className="main-text">Yoga</span>
          <span className="sub-text">progress</span>
          <span className="sub-text">not done in this week</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "30%" }}></div>
        </div>
      </div>
      <div className="goal-item">
        <div className="text-container" align="center">
          <span className="main-text">Swimming</span>
          <span className="sub-text">progress</span>
          <span className="sub-text">done</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default GoalsChart;
