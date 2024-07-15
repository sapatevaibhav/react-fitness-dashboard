import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      setCurrentDate(date);
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="greeting">
        <h1>Hello Amit</h1>
        <p>Howz the josh?</p>
      </div>
      <div className="search-bar">
        <div className="search-input-wrapper">
          <input type="text" placeholder="Search" />
          <img src="/assets/search.svg" alt="Search" className="search-icon" />
        </div>
      </div>
      <div className="date-time noti">
        <span>{currentDate}</span> <span>{currentTime}</span>
        <img src="/assets/notification.svg" alt="notification" className="noti-image" />
      </div>
      <div className="user-profile">
        <img src="/assets/user.png" alt="User" className="user-image" />
      </div>
    </header>
  );
}

export default Header;
