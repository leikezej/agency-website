import React from "react";
import './industry.css';

const Industry = () => {

  return (
    <div className="industry__wrapper">
        <h1 className="industry__title">Industry</h1>
        <h3>We support you in your <mark>digital journey</mark> with <br />
our software development expertise in modern methodologies and <mark> best practices. </mark></h3>
        <div className="divider"></div>

        <div className="industry__container">
            <div className="industry__card">
              <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/256/external-pharmacist-medical-kiranshastry-gradient-kiranshastry.png" alt="" />
              <p>Healthcare Systems</p>
            </div>
            <div className="industry__card">
              <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/256/external-bank-banking-and-finance-kiranshastry-gradient-kiranshastry.png" alt="" />
              <p>Real Estate Application</p>
            </div>
            <div className="industry__card">
              <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/256/external-online-payment-ecommerce-xnimrodx-lineal-gradient-xnimrodx.png" alt="" />
              <p>Market Systems</p>
            </div>
            <div className="industry__card">
              <img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/256/external-ads-ads-icongeek26-outline-colour-icongeek26-8.png" alt="" />
              <p>Marketing & AdTech</p>
            </div>
        </div>

        <div className="industry__container">
            <div className="industry__card">
              <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/256/external-comment-time-management-xnimrodx-lineal-gradient-xnimrodx.png" alt="" />
              <p>Social Network</p>
            </div>
            <div className="industry__card">
              <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/256/external-money-ecommerce-xnimrodx-lineal-gradient-xnimrodx.png" alt="" />
              <p>Fintech System</p>
            </div>
            <div className="industry__card">
              <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/256/external-mortarboard-online-learning-kiranshastry-gradient-kiranshastry.png" alt="" />
              <p>Education & Ed Tech</p>
            </div>
            <div className="industry__card">
              <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/256/external-dollar-tag-banking-and-finance-kiranshastry-gradient-kiranshastry.png" alt="" />
              <p>E-commerce & Retail</p>
            </div>
        </div>
    </div>
  )
}

export default Industry;