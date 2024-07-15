import React from 'react';
import './Header.css';

function Header() {
  return (
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
  );
}

export default Header;
