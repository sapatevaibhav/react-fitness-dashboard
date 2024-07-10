import React from 'react';
import './GoalsChart.css';

function GoalsChart() {
  return (
    <div className="goals">
      <div className="goal-item">
        <span>Sleep at night</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '90%' }}></div>
        </div>
        <span>20 nights in row</span>
      </div>
      <div className="goal-item">
        <span>Workout 5/7</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '60%' }}></div>
        </div>
        <span>2 weeks in row</span>
      </div>
      <div className="goal-item">
        <span>Yoga</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '30%' }}></div>
        </div>
        <span>
          not done in this week</span>
      </div>
      <div className="goal-item">
        <span>Swimming</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '100%' }}></div>
        </div>
        <span>done</span>
      </div>
      <button className="set-goal-button">set new fitness goal</button>
    </div>
  );
}

export default GoalsChart;
