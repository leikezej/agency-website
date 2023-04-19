import React from "react";
import './about.css';

const About = () => {

  return (
    <section className="about__wrapper">
        <div className="about__left">
          <h3 className="about__title">About us</h3>
          <h1 className="about__subtitle">Who we <mark>are</mark></h1>
          <div className="about__divider"></div>
          <p className="about__text1">PowerGate Australia is a Leading Software Product Studio for Australia</p>
          <p className="about__text2">We don’t let obstacles and challenges defeat us. <br />We collaborate with companies from small start-ups <br /> to large enterprises in Australia to deliver brilliant technological <br /> products and transit seamlessly in the modern <br /> digital age while overcoming risks with the purpose of supporting our <br /> partners to achieve their goals.</p>
        </div>

        <div className="about__right">
          <img src="	https://yvx2e3.n3cdn1.secureserver.net/wp-content/uploads/2023/01/team-min.jpg
" alt="" />
        </div>
    </section>
  )
}

export default About;