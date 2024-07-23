import React from "react";
import { Pie } from "react-chartjs-2";

const DurationChart = () => {
  const data = {
    labels: ["29", "25", "24", "17", "15"],
    datasets: [
      {
        data: [29, 25, 24, 17, 15],
        backgroundColor: [
          "#01776A",
          "#1F9385",
          "#31A093",
          "#47AEA2",
          "#79C9C0",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: { usePointStyle: true, pointStyle: "rect" },
      },
    },
  };

  return (
    <div className="chart">
      <Pie data={data} options={options} />
    </div>
  );
};

export default DurationChart;
