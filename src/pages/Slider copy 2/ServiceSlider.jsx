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
import mongo from "../../assets/social/mongodb.png";

const Slider = () => {

  return (
    <section className="training__section">
        <h1>Our Training Sections</h1>
            <div className="training__container">
                <div className="training__items">
                    <img src={javascript} alt="" />
                    <h3>Javascript</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
                <div className="training__items">
                    <img src={nodejs} alt="" />
                    <h3>NodeJS</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
                <div className="training__items">
                    <img src={react} alt="" />
                    <h3>ReactJS</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
                <div className="training__items">
                    <img src={nestjs} alt="" />
                    <h3>NestJs</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
                <div className="training__items">
                    <img src={mysql} alt="" />
                    <h3>MySql</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
                <div className="training__items">
                    <img src={mongo} alt="" />
                    <h3>MongoDB</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
                <div className="training__items">
                    <img src={android} alt="" />
                    <h3>React Native</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
                <div className="training__items">
                    <img src={php} alt="" />
                    <h3>PHP</h3>
                    <p>jasdjasjdasdasjkdhasuidaosidasiohdasoihdsiadasiodhasiodhiasdasdsdjkisjdlksjdlksadnaskl</p>
                    <button>Read More</button>
                </div>
            </div>
    </section>
  )
}

export default Slider;