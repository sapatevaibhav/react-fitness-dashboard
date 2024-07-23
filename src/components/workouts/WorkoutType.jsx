import React from "react";
import "./Workouts.css";

const workoutTypes = [
  { type: "cardio", description: "for good heart health", result: "up" },
  { type: "endurance", description: "for strength training", result: "up" },
  { type: "weightloss", description: "for look good", result: "down" },
  { type: "muscle train", description: "target specific muscle", result: "up" },
  { type: "Menu Label", description: "Menu description.", result: "up" },
];

const WorkoutType = () => {
  return (
    <div className="workout-type">
      <h3>Workout Type</h3>
      <ul>
        {workoutTypes.map((workout, index) => (
          <li key={index}>
            <i className="fa-solid fa-star"></i>
            <div className="workout-info">
              <span className="workout-name">{workout.type}</span>
              <div className="workout-description">{workout.description}</div>
            </div>
            {workout.result === "up" ? (
              <i className="fa fa-up-long arrow"></i>
            ) : (
              <i className="fa fa-down-long arrow"></i>
            )}
            {workout.result === "up" ? <div>A</div> : <div>B</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutType;
