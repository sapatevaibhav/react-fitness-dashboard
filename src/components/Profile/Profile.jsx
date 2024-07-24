import React from "react";
import "./Profile.css";
import ProfChart from "./Chart.jsx";
import ProfileCard from "./ProfileCard";
import WorkoutPlanCard from "./WorkoutPlanCard";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileCard />
      <div className="stats-card">
        <img
          src="/assets/calories.png"
          alt="Calories Burned"
          className="stats-icon"
        />
        <div className="stats-text">
          <p className="stats-title">calories burned</p>
          <p className="stats-value">22,456 Kcal</p>
        </div>
      </div>
      <div className="stats-card">
        <img src="/assets/steps.png" alt="Steps" className="stats-icon" />
        <div className="stats-text">
          <p className="stats-title">steps</p>
          <p className="stats-value">22,356</p>
        </div>
      </div>
      <div className="chart-card">
        <ProfChart />
      </div>
      <WorkoutPlanCard />
      <div className="overall-fitness-card">
        <h3>overall fitness</h3>
      </div>
    </div>
  );
};

export default Profile;
