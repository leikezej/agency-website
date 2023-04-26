import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";

import logo from "../../assets/logo1.png";
// import logo2 from "../../assets/logo-v2.png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: isScrolled ? '#666' : '#fff',
    color: isScrolled ? '#333' : '#fff',
    transition: 'background-color 0.5s ease',
  };

  return (
    // <nav className="navbar">
    <nav style={navbarStyle} className="navbar">
      <div className="navbar-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/services"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/portfolio"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/technology"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Technology
            </NavLink>
          </li>
          <NavLink exact to="/process" className="nav-logo">
            <img src={logo} alt="" />
            {/* BUGTECH
          <i className="fas fa-code"></i> */}
        </NavLink>
          <li className="nav-item">
            <NavLink
              exact
              to="/industry"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Industry
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/testimonial"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Testimonial
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/career"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Career
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;