import React from 'react';
import './portfolio.css';

import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div className="portfolio__header">
        <h1 className="portfolio__title">Portfolio</h1>
        <p className="portfolio__subtitle">Successful Stories</p>
        <h2 className="portfolio__text">
          We never let ourselves forget that we're fortunate<br />to collaborate with <mark>our partners</mark>.
        </h2>
        <div className="divider"></div>
        <PortfolioCard />
    </div>
  )
}

export default Portfolio