import React from "react";
import Sidebar from "./Sidebar";
import ProgressChart from "./ProgressChart";
import GoalsChart from "./GoalsChart";
import Header from "./Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <Header />
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
      </div>
    </div>
  );
}

export default Home;
