import React from "react";
import "./Workouts.css";

const CustomWorkoutPlan = () => {
  return (
    <div className="custom-workout-plan">
      <div className="workout-plan-content">
        <h3>Do you want to make a custom workout plan?</h3>
        <p>we have something special for you</p>
        <button>click here</button>
      </div>
      <div className="workout-plan-image">
        <img src="/assets/girl-half.png" alt="workout" />
      </div>
    </div>
  );
};

export default CustomWorkoutPlan;
