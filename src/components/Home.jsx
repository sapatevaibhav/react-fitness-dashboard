import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Workouts from "./workouts/Workouts";
import Profile from "./Profile/Profile";
import Goals from "./Goals/Goals";

function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="home">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content-wrapper">
        <Header />
        <div className="main-content">
          {activeTab === "Dashboard" && (
            <div className="charts">
              <Dashboard />
            </div>
          )}
          {activeTab === "Workouts" && (
            // <div className="charts">
            <Workouts />
            // </div>
          )}
          {activeTab === "Goals" && <Goals />}
          {activeTab === "Profile" && (
            // <div className="charts">
            <Profile />
            // </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
