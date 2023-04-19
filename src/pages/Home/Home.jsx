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
import Team from "../../pages/Team/Team";
import Know from "../../components/Know/Know";

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
        <Team />
        <Know />
    </div>
  )
}

export default Home;