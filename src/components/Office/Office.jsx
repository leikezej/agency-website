import React from 'react';
import './office.css';

import img1 from '../../assets/office/office-img1.jpg';
import img2 from '../../assets/office/office-img2.jpg';
import img3 from '../../assets/office/office-img3.jpg';
import img4 from '../../assets/office/office-img4.jpg';
import img5 from '../../assets/office/office-img5.jpg';
import img6 from '../../assets/office/office-img6.jpg';

const Office = () => {
  return (
    <>
     <div className="office__wrapper">
        <h1 className="office__title">Explore Our Office</h1>
        <br />
        <div className="divider"></div>
        
        <div className="office__image">
          <img src={img1} alt="office1" />
          <img src={img2} alt="office2" />
          <img src={img3} alt="office3" />
        </div>
        <div className="office__image">
          <img src={img4} alt="office4" />
          <img src={img5} alt="office5" />
          <img src={img6} alt="office6" />
        </div>
     </div>
    </>
  )
}

export default Office
