import React from "react";
import { Line } from "react-chartjs-2";

const CaloriesBurnedChart = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Calories Burned",
        data: [
          3, 1, 3, 3, 0, 1, 4, 1, 5, 5, 3, 2, 4, 3, 5, 2, 1, 1, 1, 0, 1, 1, 5,
          1, 0, 1, 2, 3, 5, 7,
        ],
        borderColor: "#01776a",
        tension: 0.05,
        fill: false,
        pointRadius: 3,
        pointHoverRadius: 10,
        borderWidth: 1,
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
    y: {
      ticks: {
        stepSize: 2,
      },
    },
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default CaloriesBurnedChart;
