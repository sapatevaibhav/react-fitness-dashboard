import React from "react";
import "./Workouts.css";

const workoutTypes = [
  { type: "cardio", description: "for good heart health" },
  { type: "endurance", description: "for strength training" },
  { type: "weightloss", description: "for look good" },
  { type: "muscle train", description: "target specific muscle" },
  { type: "Menu Label", description: "Menu description." },
];

const WorkoutType = () => {
  return (
    <div className="workout-type">
      <h3>Workout Type</h3>
      <ul>
        {workoutTypes.map((workout, index) => (
          <li key={index}>
            <span className="workout-name">{workout.type}</span>
            <span className="workout-description">{workout.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutType;
