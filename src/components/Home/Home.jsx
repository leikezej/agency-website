import React, { useEffect } from "react";
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

import Blogs from "../../components/Projects/Project";
import Projects from "../../components/News/Blog";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Bugtech Devs';
    AOS.init();
  }, []);
  return (
    <div className="">
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
        <Blogs />
        <Projects />
    </div>
  )
}

export default Home;