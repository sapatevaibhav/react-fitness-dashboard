import React from "react";
import "./Sidebar.css";

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
        <span>fito</span>
      </div>
      <div className="theme-switch">
        <button className="light">Light</button>
        <button className="dark">Dark</button>
      </div>
      <nav>
        <ul>
          <li
            className={activeTab === "Dashboard" ? "active" : ""}
            onClick={() => setActiveTab("Dashboard")}
          >
            <img
              src="assets/dashboard.svg"
              alt="dash"
              className="sidebar-image"
            />{" "}
            Dashboard
          </li>
          <li
            className={activeTab === "Workouts" ? "active" : ""}
            onClick={() => setActiveTab("Workouts")}
          >
            <img
              src="assets/dumbell.svg"
              alt="dash"
              className="sidebar-image"
            />{" "}
            Workouts
          </li>
          <li
            className={activeTab === "Goals" ? "active" : ""}
            onClick={() => setActiveTab("Goals")}
          >
            <img src="assets/goal.svg" alt="dash" className="sidebar-image" />{" "}
            Goals
          </li>
          <li
            className={activeTab === "Profile" ? "active" : ""}
            onClick={() => setActiveTab("Profile")}
          >
            <img
              src="assets/profile.svg"
              alt="dash"
              className="sidebar-image"
            />{" "}
            Profile
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
