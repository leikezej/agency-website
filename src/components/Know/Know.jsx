import React from 'react';
import './know.css';

const Know = () => {
  return (
    <section className="know__wrapper">
      <h1 className="know__title">Get To Know US!</h1>
        <div className="know__divider"></div>
        <div className="know__details">
            <div className="know__card">
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/256/external-target-advertising-kiranshastry-gradient-kiranshastry-4.png" alt="" />
                &nbsp;<p><b>200+</b><br /> Successful Projects</p>
            </div>
            <div className="know__card">
                <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/256/external-shield-frequently-asked-questions-faq-bearicons-gradient-bearicons.png" alt="" />
                &nbsp;<p><b>10+</b><br /> Years of Experience</p>
            </div>
            <div className="know__card">
                <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/256/external-happy-customer-review-xnimrodx-lineal-gradient-xnimrodx.png" alt="" />
                &nbsp;<p><b>96%</b><br /> Satisfaction Rate</p>
            </div>
        </div>
    </section>
  )
}

export default Know
