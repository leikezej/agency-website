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
import Testimonial from "../Testimonial/Testimonial";
import Ideas from "../../components/Ideas/Ideas";
import Awards from "../../components/Awards/Awards";
import Process from "../../components/Process/Process";
import Contact from "../../pages/Contact/Contact";

const Home = () => {
  return (
    <div>
        <Carousel />
        <Services />
        <ServiceSlider />
        <Portfolio />
        <Office />
        <Technology />
        <Industry />
        <AboutUs />
        <Team />
        <Know />
        <Ideas />
        <Testimonial />
        <Awards />
        <Process />
        <Contact />
    </div>
  )
}

export default Home;