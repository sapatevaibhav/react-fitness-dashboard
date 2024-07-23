import React from "react";
import { Line } from "react-chartjs-2";

const ProfChart = () => {
  const data = {
    labels: [0, 1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Fitness",
        data: [20, 40, 45, 35, 55, 60],
        borderColor: "#2D9CDB",
        tension: 0.1,
        fill: false,
        pointRadius: 4,
        pointBackgroundColor: "#2D9CDB",
        pointBorderColor: "#2D9CDB",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{ height: "400px", width: "400px" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default ProfChart;
