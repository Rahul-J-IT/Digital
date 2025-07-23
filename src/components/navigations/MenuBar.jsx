import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./MenuBar.css";

const hoverData = {
  BUYER: {
    title: "Buy Properties",
    sections: [
      {
        title: "Buy Properties",
        items: ["Search Listings", "Featured Properties", "New Listings", "Price Reduced"]
      },
      {
        title: "Resources", 
        items: ["Buyer's Guide", "Financing Options", "Market Reports", "Neighborhood Info"]
      },
      {
        title: "Services",
        items: ["Home Inspection", "Mortgage Calculator", "Property Alerts", "Expert Advice"]
      }
    ]
  },
  SELLER: {
    title: "Sell Properties", 
    sections: [
      {
        title: "List Property",
        items: ["List Your Home", "Seller Dashboard", "Upload Photos", "Set Pricing"]
      },
      {
        title: "Marketing",
        items: ["Marketing Tools", "Professional Photos", "Virtual Tours", "Social Media"]
      },
      {
        title: "Analytics",
        items: ["Market Analysis", "Pricing Guide", "Performance Reports", "Competitor Analysis"]
      }
    ]
  },
  AGENT: {
    title: "Agent Portal",
    sections: [
      {
        title: "Get Started",
        items: ["Join Our Network", "Agent Registration", "Training Program", "Certification"]
      },
      {
        title: "Tools & Resources", 
        items: ["Agent Portal", "CRM System", "Lead Generation", "Marketing Materials"]
      },
      {
        title: "Support",
        items: ["Commission Structure", "Agent Resources", "Help Center", "Community Forum"]
      }
    ]
  },
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
    <div className="header-container">
      <nav className="header" onMouseLeave={handleMouseLeave}>
        <div className="nav-wrapper">
          <a className="logo" href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4A90E2" />
              <path d="M2 17L12 22L22 17" stroke="#4A90E2" strokeWidth="2" />
              <path d="M2 12L12 17L22 12" stroke="#4A90E2" strokeWidth="2" />
            </svg>
            PROPY
          </a>

          <ul className="menu">
            {["BUYER", "SELLER", "AGENT"].map((item) => (
              <li 
                key={item} 
                className={`menu-item ${activeDrawer === item ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <a href={`/${item.toLowerCase()}`}>
                  {item}
                  <ChevronDown className="chevron-icon" />
                </a>
              </li>
            ))}
            <li className="menu-item"><a href="/title-escrow">TITLE & ESCROW</a></li>
            <li className="menu-item"><a href="/open-escrow">OPEN ESCROW</a></li>
            <li className="menu-item"><a href="/sign-in">SIGN IN</a></li>
          </ul>
        </div>
      </nav>

      <div 
        className={`full-width-drawer ${activeDrawer ? 'active' : ''}`}
        onMouseEnter={() => {}} 
        onMouseLeave={handleMouseLeave}
      >
        {activeDrawer && hoverData[activeDrawer] && (
          <div className="drawer-content">
            {hoverData[activeDrawer].sections.map((section, idx) => (
              <div key={idx} className="drawer-section">
                <h3 className="section-title">{section.title}</h3>
                <ul className="section-items">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="section-item">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div 
        className={`drawer-backdrop ${activeDrawer ? 'active' : ''}`}
        onMouseEnter={handleMouseLeave}
      ></div>
    </div>
  );
};

export default MenuBar;
