import React from "react";
import "./Workouts.css";
import CaloriesBurnedChart from "./CaloriesBurned";
import DurationChart from "./DurationChart";
import WorkoutType from "./WorkoutType";
import CustomWorkoutPlan from "./CustomWorkoutPlan";
import CustomCalendar from "../Dashboard/Calendar";

const Workouts = () => {
  return (
    <div className="workouts">
      <div className="chart">
        <CaloriesBurnedChart />
      </div>
      <div className="stats-container">
        <div className="calendar-wrapper">
          <CustomCalendar />
        </div>
        <DurationChart />
        <WorkoutType />
      </div>
      <CustomWorkoutPlan />
    </div>
  );
};

export default Workouts;
