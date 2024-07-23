import React from "react";
import "./Profile.css";
import ProfChart from "./Chart.jsx";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-card">
        <img src="/assets/profile.png" alt="Profile" className="profile-img" />
        <h2 className="profile-name">amit barve</h2>
        <p className="profile-level">beginner</p>
        <button className="edit-profile-btn">edit profile</button>
        <div className="profile-buttons">
          <button className="profile-btn">credits</button>
          <button className="profile-btn">fitness level</button>
        </div>
      </div>
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
        <img src="/assets/setps.png" alt="Steps" className="stats-icon" />
        <div className="stats-text">
          <p className="stats-title">steps</p>
          <p className="stats-value">22,356</p>
        </div>
      </div>
      {/* <div className="chart-card"> */}
      <ProfChart /> {/* </div> */}
      <div className="overall-fitness-card">
        <h3>overall fitness</h3>
      </div>
      <div className="workout-plan-card">
        <img
          src="/assets/girl.png"
          alt="Workout Plan"
          className="workout-plan-img"
        />
        <button className="workout-plan-btn">make a workout plan now !!</button>
      </div>
    </div>
  );
};

export default Profile;
