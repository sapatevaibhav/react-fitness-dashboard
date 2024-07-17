import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

const CaloriesBurnedChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Calories Burned",
        data: [200, 450, 700, 850, 400, 300, 600],
        backgroundColor: "#4caf50",
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
      <h3>Calories Burned</h3>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default CaloriesBurnedChart;
