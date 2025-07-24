import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, DoorClosed, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState("");
  const headerRef = useRef(null);
  const drawerRef = useRef(null);

  const handleMouseEnter = (section) => {
    setActiveDrawer(section);
  };

  const handleMouseLeave = (e) => {
    // Check if mouse is moving to drawer area
    const header = headerRef.current;
    const drawer = drawerRef.current;
    
    if (!header || !drawer) {
      setActiveDrawer("");
      return;
    }

    const headerRect = header.getBoundingClientRect();
    const drawerRect = drawer.getBoundingClientRect();
    
    // If mouse is within the combined area of header and drawer, don't close
    const withinHeaderOrDrawer = (
      e.clientY >= headerRect.top && 
      e.clientY <= drawerRect.bottom &&
      e.clientX >= Math.min(headerRect.left, drawerRect.left) &&
      e.clientX <= Math.max(headerRect.right, drawerRect.right)
    );

    if (!withinHeaderOrDrawer) {
      setActiveDrawer("");
    }
  };

  const handleDrawerMouseLeave = (e) => {
    // Only close if mouse leaves both header and drawer area
    const header = headerRef.current;
    const drawer = drawerRef.current;
    
    if (!header || !drawer) {
      setActiveDrawer("");
      return;
    }

    const headerRect = header.getBoundingClientRect();
    const drawerRect = drawer.getBoundingClientRect();
    
    const withinBounds = (
      e.clientY >= headerRect.top && 
      e.clientY <= drawerRect.bottom &&
      e.clientX >= Math.min(headerRect.left, drawerRect.left) &&
      e.clientX <= Math.max(headerRect.right, drawerRect.right)
    );

    if (!withinBounds) {
      setActiveDrawer("");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubmenu = (section) => {
    setActiveMobileSubmenu(activeMobileSubmenu === section ? "" : section);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileSubmenu("");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setMobileMenuOpen(false);
        setActiveMobileSubmenu("");
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header-container">
      <nav 
        className="header" 
        ref={headerRef}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`nav-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
          <a className="logo" href="/">
            <img src="/image.png" alt="" />
             
            Build works
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
            <li className="menu-item-b"><a href="/title-escrow">TITLE & ESCROW</a></li>
            <li className="menu-item-b"><a href="/open-escrow">OPEN ESCROW</a></li>
            <li className="menu-item-b"><a href="/sign-in">SIGN IN</a></li>
          </ul>

          <button 
            className={`menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      <div 
        ref={drawerRef}
        className={`full-width-drawer ${activeDrawer ? 'active' : ''}`}
        onMouseLeave={handleDrawerMouseLeave}
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
        onMouseEnter={() => setActiveDrawer("")}
      ></div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <a className="logo" href="/" onClick={closeMobileMenu}>
            
            <img src="/image.png" alt="" />
             
            Build works
          </a>
          {
            mobileMenuOpen?
          (<button 
            className={`menu-btn active`}
            onClick={closeMobileMenu}
          >
            <div className="closeicon">
              <X size={32} color="white"/>
              
            </div>
          </button>):(
            <button 
            className={`menu-btn active`}
            onClick={closeMobileMenu}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>)
}
        </div>

        <div className="mobile-menu-content">
          {["BUYER", "SELLER", "AGENT"].map((item) => (
            <div key={item} className="mobile-menu-item">
              <div 
                className="mobile-menu-link"
                onClick={() => toggleMobileSubmenu(item)}
              >
                {item}
                <ChevronDown 
                  className="chevron-icon" 
                  style={{
                    transform: activeMobileSubmenu === item ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              <div className={`mobile-submenu ${activeMobileSubmenu === item ? 'active' : ''}`}>
                {hoverData[item].sections.map((section, idx) => (
                  <div key={idx} className="mobile-submenu-section">
                    <h3 className="mobile-submenu-title">{section.title}</h3>
                    <ul className="mobile-submenu-items">
                      {section.items.map((subItem, itemIdx) => (
                        <li key={itemIdx} className="mobile-submenu-item">
                          <a href="#" onClick={closeMobileMenu}>{subItem}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <a href="/title-escrow" className="mobile-simple-link" onClick={closeMobileMenu}>
            TITLE & ESCROW
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default MenuBar;