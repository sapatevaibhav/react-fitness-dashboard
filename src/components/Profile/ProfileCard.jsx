import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src="/assets/user.png" alt="Profile" className="profile-img" />
      <h2 className="profile-name">amit barve</h2>
      <p className="profile-level">beginner</p>
      <button className="edit-profile-btn">edit profile</button>
      <div className="profile-buttons">
        <button className="profile-btn">credits</button>
        <button className="profile-btn">fitness level</button>
      </div>
    </div>
  );
};

export default ProfileCard;
