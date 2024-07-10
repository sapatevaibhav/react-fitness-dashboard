import React from 'react';
import Sidebar from './Sidebar';
import ProgressChart from './ProgressChart';
import GoalsChart from './GoalsChart';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <div className="greeting">
            <h1>Hello Amit</h1>
            <p>Howz the josh?</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button><i className="fa fa-search"></i></button>
          </div>
          <div className="date-time">
            <span>Jun 10, 2024</span>
            <span>9:41 AM</span>
          </div>
          <img src="/assets/user.png" alt="User" className="user-image" />
        </header>
        <div className="charts">
          <div className="progress-chart">
            <h2>Progress</h2>
            <div className="main-chart">            <ProgressChart />
            </div>
          </div>
          <div className="goals-chart">
            <h2>Goal</h2>
            <GoalsChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
