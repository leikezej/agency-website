import React from "react";
import './slider.css';

import javascript from "../../assets/social/javascript.png";
import python from "../../assets/social/python.png";
import mysql from "../../assets/social/mysql.png";
import nodejs from "../../assets/social/nodejs.png";
import nestjs from "../../assets/social/nestjs.png";
import php from "../../assets/social/php.png";
import android from "../../assets/social/android-os.png";
import react from "../../assets/social/react-native.png";

const Slider = () => {

  return (
    <section className="slider__wrapper">
        <h1 className="slider__title">Slider</h1>
        <h3 className="slider__subtitle">Your <mark>projects</mark> are all that matter. We build them as if they <br /> were our own.</h3>
        <br />
       <div className="divider"></div>

      <div className="slider__card">
        <div className="slider__items">
            <img src={javascript} alt="" />
            <h3>Javascript</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
        <div className="slider__items">
            <img src={python} alt="" />
            <h3>Phyton Programming</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
        <div className="slider__items">
            <img src={mysql} alt="" />
            <h3>Javascript</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
        <div className="slider__items">
            <img src={nodejs} alt="" />
            <h3>Phyton Programming</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
        <div className="slider__items">
            <img src={nestjs} alt="" />
            <h3>Javascript</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
        <div className="slider__items">
            <img src={php} alt="" />
            <h3>Phyton Programming</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
        <div className="slider__items">
            <img src={android} alt="" />
            <h3>Javascript</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
        <div className="slider__items">
            <img src={react} alt="" />
            <h3>Phyton Programming</h3>
            <p>description 1 for text 1</p>
            <button>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default Slider;