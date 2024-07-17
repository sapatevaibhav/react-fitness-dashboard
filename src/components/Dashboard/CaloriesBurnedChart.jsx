import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

const CaloriesBurnedChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Calories Burned",
        data: [240, 100, 230, 850, 200, 650, 560, 30],
        backgroundColor: "#158b7e",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        grid: { display: false },
        beginAtZero: true,
        ticks: {
          stepSize: 250,
        },
      },
      x: {
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
    <div className="chart-container calories-burned">
      <h3>Calories Burned</h3>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default CaloriesBurnedChart;
