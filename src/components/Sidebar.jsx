import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
        <span>fito</span>
      </div>
      <div className="theme-switch">
        <button>Light</button>
        <button>Dark</button>
      </div>
      <nav>
        <ul>
          <li>
            <i className="fa fa-tachometer"></i> Dashboard
          </li>
          <li>
            <i className="fa fa-heartbeat"></i> Workouts
          </li>
          <li className="active">
            <i className="fa fa-flag"></i> Goals
          </li>
          <li>
            <i className="fa fa-user"></i> Profile
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
