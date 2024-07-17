import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(LineElement, PointElement, CategoryScale, LinearScale);

const FitnessGoalsChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Weight Loss",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 7)),
        backgroundColor: "transparent",
        borderColor: "#4caf50",
        pointBackgroundColor: "#4caf50",
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

  return (
    <div className="chart-container">
      <h3>Fitness Goals</h3>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default FitnessGoalsChart;
