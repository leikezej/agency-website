import React from "react";
import './home.css';

import Carousel from "./Carousel";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import ServiceSlider from "../Slider/ServiceSlider";

import Technology from "../../pages/Technology/Technology";
import AboutUs from "../../pages/About/About";
import Office from "../../components/Office/Office";
import Industry from "../Industry/Industry";
// import Card from "../../components/Card/Card";
// import Articles from "../../utils/Articles/Articles";

const Home = () => {

  return (
    <div className="home__wrapper">
        <Carousel />
        <Services />
        <br />
        <br />
        <ServiceSlider />
        <Portfolio />
        <Office />
        <Technology />
        <Industry />
        <AboutUs />
    </div>
  )
}

export default Home;