import React, { useState } from 'react';
import "./navbar.css";

import logo from "../../assets/logo-v2.png";

const Navbar = () => {
  /*============ Toggle  Menu======== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
  <header className="header">
    <nav className="nav container">


    <div className={Toggle ? "nav__menu show-menu" :
  "nav__menu"}>
      <ul className="nav__list grid">
          <li className= "nav__item">
          <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? 
            "nav__link active-link" : "nav__link"}>
          <i className="uil uil-estate nav__icon"></i>Home
          </a>
        </li>

        <li className= "nav__item">
          <a
            href="#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>Services
          </a>
        </li>

        <li className= "nav__item">
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>Portfolio
          </a>
        </li>

        <li className= "nav__item">
          <a
            href="#technology"
            onClick={() => setActiveNav("#technology")}
            className={activeNav === "#technology" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>Technology
          </a>
        </li>

          <img src={logo} alt="" className="nav__logo" />


        <li className= "nav__item">
          <a
            href="#industry"
            onClick={() => setActiveNav("#industry")}
            className={activeNav === "#industry" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>Industry
          </a>
        </li>

        <li className= "nav__item">
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>AboutUs
          </a>
        </li>

        <li className= "nav__item">
          <a
            href="#testimonial"
            onClick={() => setActiveNav("#testimonial")}
            className={activeNav === "#testimonial" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>Testimonial
          </a>
        </li>

        <li className= "nav__item">
          <a
            href="#career"
            onClick={() => setActiveNav("#career")}
            className={activeNav === "#career" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>Career
          </a>
        </li>


        <li className= "nav__item">
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ?
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-estate nav__icon"></i>Contact
          </a>
        </li>
      </ul>


      <i class="uil uil-times nav__close" onClick={() =>
        showMenu(!Toggle)}></i>
    </div>
<div className="nav__toggle" onClick={() => showMenu
  (!Toggle)}>
      <i class="uil uil-apps"></i>
    </div>
  </nav>
  </header>
  );
};

export default Navbar;