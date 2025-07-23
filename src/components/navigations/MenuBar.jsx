import React, { useState } from "react";
import "./MenuBar.css";
import { FaChevronDown } from "react-icons/fa";
const hoverData = {
  About: [
    "Our Company Story",
    "Leadership & Team",
    "Mission & Vision",
    "Careers at Billion Towers",
    "Media & Press Releases",
    "Sustainability & CSR",
    "Investor Relations",
  ],
  MarketPlace: [
    "Explore Properties for Sale",
    "List Your Property",
    "Crypto-Powered Real Estate Deals",
    "Verified Agents",
    "Virtual Property Tours",
    "EMI & Loan Assistance",
    "Property Valuation Tool",
  ],
  FAQ: [
    "How the Platform Works",
    "Safety & Security Guidelines",
    "Average Transaction Time",
    "Legal & Documentation Help",
    "Support & Contact Info",
    "Refund & Cancellation Policy",
    "Platform Fees Explained",
  ],
  Contact: [],
};

const MenuBar = () => {
  const [activeDrawer, setActiveDrawer] = useState("");

  const handleMouseEnter = (section) => {
    setActiveDrawer(section);
  };

  const handleMouseLeave = () => {
    setActiveDrawer("");
  };

  return (
    <>
      <nav className="header" onMouseLeave={handleMouseLeave}>
        <div className="nav-wrapper">
          <a className="logo" href="/">
            <svg
              width="30"
              height="35"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="20" r="10" stroke="#006EFF" />
              <circle cx="15" cy="20" r="6" stroke="#006EFF" strokeWidth="3" />
            </svg>
            Billion Towers
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            {["About", "MarketPlace", "FAQ"].map((item) => (
              <li key={item} onMouseEnter={() => handleMouseEnter(item)}>
                <a href={`/${item}`}>
                  {item}
                  <span className="dropdown-icon">
                    <icon>
                      <FaChevronDown />
                    </icon>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <button className="button">Connect</button>
            </li>
          </ul>
        </div>
        <div className={`drawer ${activeDrawer ? "open" : "closed"}`}>
          <div className="drawer-content">
            {hoverData[activeDrawer]?.map((info, idx) => (
              <p key={idx}>{info}</p>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuBar;
