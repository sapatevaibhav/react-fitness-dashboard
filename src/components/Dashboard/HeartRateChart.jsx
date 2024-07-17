import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Ticks,
} from "chart.js";

Chart.register(LineElement, PointElement, CategoryScale, LinearScale);

const HeartRateChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["0", "1", "2", "3"],
    datasets: [
      {
        label: "Heart Rate",
        data: [60, 82, 65, 80],
        backgroundColor: "transparent",
        borderColor: "#158b7e",
        pointBackgroundColor: "#158b7e",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-container heart-rate-chart">
      <h3>Heart Rate</h3>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default HeartRateChart;
