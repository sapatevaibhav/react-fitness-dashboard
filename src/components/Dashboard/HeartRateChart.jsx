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

const HeartRateChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["1", "2", "3"],
    datasets: [
      {
        label: "Heart Rate",
        data: [60, 72, 65],
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
      <h3>Heart Rate</h3>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default HeartRateChart;
