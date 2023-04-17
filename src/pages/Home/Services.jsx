import React from "react";
import './home.css';

const Services = () => {

  return (
    <div className="services__wrapper">
        <h1 className="services__title">Services</h1>
        <h3 className="services__subtitle">Your <mark>projects</mark> are all that matter. We build them as if they were our own.</h3>
      
      <div className="services__card">
        <div className="cardss">Card1</div>
        <div className="cardss">Card2</div>
        <div className="cardss">Card3</div>
      </div>
    
    </div>
  )
}

export default Services;