import React from "react";
import './services.css';

const Services = () => {

  return (
    <div className="services__wrapper">
        <h1 className="services__title">Services</h1>
        <h3 className="services__subtitle">Your <mark>projects</mark> are all that matter. We build them as if they <br /> were our own.</h3>
        <br />
       <div className="divider"></div>

      <div className="card__container">
            <div class="services__cards">
                <div className="card__wrappers">
                    <div class="card-image"></div>
                  <div class="card__title">Build Product from Scratch
                </div>
                  <div class="card-text">
                  From scratch, we can plug into your organization to support you innovate and transform faster.
                  </div>
                </div>
            </div>

          <div class="services__cards">
            <div className="card__wrappers">
              <div class="card-image"></div>
                <div class="card__title">Extend Production Team</div>
                <div class="card-text">
                If you're short on tech specialists, missing deadlines or going over budget, we're here for you.
                </div>
            </div>
          </div>

          <div class="services__cards">
            <div className="card__wrappers">
              <div class="card-image"></div>
                <div class="card__title">Manage an Entire Product</div>
                <div class="card-text">
                We deliver world-class software products from initial discovery all the way to deployment and maintenance.
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Services;