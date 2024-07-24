import React from "react";
import "./WorkoutPlanCard.css";

const WorkoutPlanCard = () => {
  return (
    <div className="workout-plan-card">
      <img
        src="/assets/girl.png"
        alt="Workout Plan"
        className="workout-plan-img"
      />
      <div className="workout-plan-content">
        <div className="workout-plan-text">make a workout plan now !!</div>
        <button className="workout-plan-btn">make now</button>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
