import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import logo from "../../assets/logo1.png";
// import logo2 from "../../assets/logo-v2.png";

function NavBar() {
  const [click, setClick] = useState(false);
  // const [colorChange, setColorchange] = useState(false);
  // const [navbarLogo, setNavbarLogo] = useState(logo)

  const handleClick = () => setClick(!click);

  // const changeNavbarColor = () =>{
  //   if(window.scrollY >= 80){
  //     setColorchange(true);
  //   }
  //   else{
  //     setColorchange(false);
  //   }
  // };

  //   //navbar scroll changeBackground function
  // const changeBackground = () => {
  //     console.log(window.scrollY)
  //     if (window.scrollY >= 66) {
  //       setNavbar(true)
  //     } else {
  //       setNavbar(false)
  //     }
  // };

  // useEffect(() => {
  //   changeBackground()
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeBackground)
  // })

  // //logo scroll function
  // const changeLogo = () => {
  //   if (window.scrollY >= 60) {
  //     setNavbarLogo(logo2)
  //   } else {
  //     setNavbarLogo(logo)
  //   }
  // }

  // useEffect(() => {
  //   changeLogo()
  //   // adding the event when scroll change Logo
  //   window.addEventListener("scroll", changeLogo)
  // })
 
//  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
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
    </>
  );
}

export default NavBar;