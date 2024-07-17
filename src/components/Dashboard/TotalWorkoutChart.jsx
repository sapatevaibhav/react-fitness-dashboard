import React, { useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);
const workout_data = [46, 14];
const TotalWorkoutChart = () => {
  const chartRef = useRef(null);

  const data = {
    datasets: [
      {
        data: workout_data,
        backgroundColor: ["#158b7e", "#8b8b8b"],
        hoverBackgroundColor: ["#33a99c", "#e4e4e4"],
        borderWidth: 0,
        borderRadius: {
          // outerStart: 50,
          outerEnd: 50,
          innerStart: 50,
          // innerEnd: 50,
        },
      },
    ],
    labels: ["Minutes", "Remaining"],
  };

  const options = {
    responsive: true,
    cutout: "85%",
    maintainAspectRatio: false,
    rotation: 180,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-container total-workout-chart">
      <h3>Total Workout</h3>
      <div className="workout-text">
        <div>{workout_data[0]}</div>
        <div>min</div>{" "}
      </div>
      <Doughnut
        ref={chartRef}
        data={data}
        options={options}
        style={{ boxSizing: "unset" }}
      />
    </div>
  );
};

export default TotalWorkoutChart;
