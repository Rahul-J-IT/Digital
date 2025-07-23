
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PropyLogo from '../../assets/propy-logo.png';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={PropyLogo} alt="Propy Logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <div 
            className="nav-item-container" 
            onMouseEnter={() => handleMouseEnter('buyer')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/buyer" className="nav-item">BUYER ▼</Link>
          </div>
          <div 
            className="nav-item-container"
            onMouseEnter={() => handleMouseEnter('seller')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/seller" className="nav-item">SELLER ▼</Link>
          </div>
          <div 
            className="nav-item-container"
            onMouseEnter={() => handleMouseEnter('agent')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/agent" className="nav-item">AGENT ▼</Link>
          </div>
          <Link to="/title-escrow" className="nav-item">TITLE & ESCROW</Link>
          <Link to="/open-escrow" className="nav-item">OPEN ESCROW</Link>
          <Link to="/sign-in" className="nav-item">SIGN IN</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;