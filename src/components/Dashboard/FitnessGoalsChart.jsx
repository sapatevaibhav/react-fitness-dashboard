import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const FitnessGoalsChart = () => {
  const [selectedChart, setSelectedChart] = useState("weight loss");
  const [month, setMonth] = useState("August 2023");

  const generateData = () =>
    Array.from({ length: 30 }, () => Math.floor(Math.random() * 7));

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: selectedChart,
        data: generateData(),
        backgroundColor: "transparent",
        borderColor: "#009688",
        pointBackgroundColor: "#009688",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleButtonClick = (chartType) => {
    setSelectedChart(chartType);
  };

  return (
    <div className="chart-container fitness-chart">
      <div className="chart-header">
        <h3>fitness goals</h3>
        <select
          className="chart-dropdown"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option>August 2023</option>
          <option>September 2023</option>
          <option>October 2023</option>
        </select>
      </div>
      <div className="chart-buttons">
        <button
          className={`chart-button ${selectedChart === "weight loss" ? "active" : ""}`}
          onClick={() => handleButtonClick("weight loss")}
        >
          weight loss
        </button>
        <button
          className={`chart-button ${selectedChart === "muscle gain" ? "active" : ""}`}
          onClick={() => handleButtonClick("muscle gain")}
        >
          muscle gain
        </button>
        <button
          className={`chart-button ${selectedChart === "endurance" ? "active" : ""}`}
          onClick={() => handleButtonClick("endurance")}
        >
          endurance
        </button>
      </div>
      <Line data={data} options={options} />
      <div className="chart-footer">{selectedChart}</div>
    </div>
  );
};

export default FitnessGoalsChart;
