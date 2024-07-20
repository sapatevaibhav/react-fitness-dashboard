import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProgressChart from "./ProgressChart";
import GoalsChart from "./GoalsChart";
import Header from "./Header";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Workouts from "./workouts/Workouts";

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
          {activeTab === "Goals" && (
            <div className="charts">
              <div className="progress-chart">
                <h2 className="header-2">Progress</h2>
                <div className="main-chart">
                  <ProgressChart />
                </div>
              </div>
              <div className="goals-chart">
                <GoalsChart />
              </div>
            </div>
          )}
          {activeTab === "Profile" && (
            <div className="charts">
              {/* Add components related to Profile */}
              <h2 className="header-2">Profile Content</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
