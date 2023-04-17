import React from "react";
import './home.css';

import Carousel from "./Carousel";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Technology from "./Technology";

const Home = () => {

  return (
    <div className="home__wrapper">
        <Carousel />
        <Services />
        <Portfolio />
        <Technology />
    </div>
  )
}

export default Home;