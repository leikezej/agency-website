import React from 'react';
import './card.css';

const Card = () => {
    return (
        <>
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
        </>
    )
}

export default Card
