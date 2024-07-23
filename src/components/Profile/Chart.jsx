import React from "react";
import { Line } from "react-chartjs-2";

const ProfChart = () => {
  const data = {
    labels: [0, 1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Fitness",
        data: [25, 40, 55, 45, 60, 65],
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
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ProfChart;
