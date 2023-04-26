import React from 'react';
import './tech.css';
import TextWritter from "../../components/Text/Text";

import img1 from "../../assets/tech/tech-img1.png";
import img2 from "../../assets/tech/tech-img2.png";
import img3 from "../../assets/tech/tech-img3.png";
import img4 from "../../assets/tech/tech-img4.png";

import { Zoom, Fade, Roll, Rotate, Flip, Bounce } from 'react-reveal';

const Technology = (props) => {
return (
    <section className="tech__wrapper">
          <Zoom left cascade>
        <Bounce left cascade>
        <h1 className="tech__title">Technology</h1>
        <h3 className="tech__subtitle">Our Technologies</h3>
        </Bounce>
        </Zoom>
        <Zoom right cascade>
        <Bounce right cascade>
        <center><TextWritter className="tech__text" text="We find solutions, whatever! <mark>Technologies</mark>" /></center>
        </Bounce>
        </Zoom>
        
    <Roll top cascade>
        <div className="tech__cards">
            <img src={img1} alt="tech1" />
            <img src={img2} alt="tech2" />
            <img src={img3} alt="tech3" />
            <img src={img4} alt="tech4" />
        </div>
        </Roll>
    </section>
    )
}

export default Technology
