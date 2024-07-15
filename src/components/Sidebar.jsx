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
        <button className='light'>Light</button>
        <button className='dark'>Dark</button>
      </div>
      <nav>
        <ul>
          <li>
            <img src="assets/dashboard.svg" alt="dash" className='sidebar-image' /> Dashboard
          </li>
          <li>
          <img src="assets/dumbell.svg" alt="dash" className='sidebar-image' /> Workouts
          </li>
          <li className="active">
          <img src="assets/goal.svg" alt="dash" className='sidebar-image' /> Goals
          </li>
          <li>
          <img src="assets/profile.svg" alt="dash" className='sidebar-image' /> Profile
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
