import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
       Shyam <span>Fitness</span>
      </a>

      <div
        className={`bx bx-menu ${menuOpen ? "menu-open" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
      >
        
      </div>

      <ul className={`navbar ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        {/* <li>
          <a href="#plans" onClick={() => setMenuOpen(false)}>Pricing</a>
        </li> */}
        <li>
          <a href="#review" onClick={() => setMenuOpen(false)}>Review</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>

      {/* <div className="top-btn">
        <a href="#contact" className="nav-btn">
          Enquiry
        </a>
      </div> */}
    </header>
  );
};

export default Header;
