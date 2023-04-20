import React from 'react'
import './footer.css';
import Foot from "../Foot/Foot";

const Footer = () => {
  return (
    <>
      <section className="footer__wrapper">
        <div className="footer__box1">
            <h2>IN AUSTRALIA</h2>
            <ul>
                <li><i className="fa fa-phone footer__icon"/>&nbsp;&nbsp;Tel: (+61) 414 231 3356</li>
                <li><i className="fa fa-envelope footer__icon"/>&nbsp;&nbsp;contact@powergateaustralia.com</li>
                <li><i className="fa fa-building footer__icon"/>&nbsp;&nbsp;Level 11/580 Collins St, Melbourne VIC 3000, Australia</li>
            </ul>
            <br />
            <br />
            <h2>IN VIETNAM</h2>
            <ul>
                <li><i className="fa fa-phone footer__icon"/>&nbsp;&nbsp;Tel: (+84) 24 66542283</li>
                <li><i className="fa fa-envelope footer__icon"/>&nbsp;&nbsp;contact@powergatevietnam.com</li>
                <li><i className="fa fa-building footer__icon"/>&nbsp;&nbsp;6Ath Floor, C Tower, Central Point Building, No 219 Trung Kinh Str, Cau Giay Dist, Ha Noi, Vietnam.</li>
            </ul>
            
        </div>

        <div className="footer__box2">
            <h1>about us</h1>
            <ul>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;About Us</li>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;Services</li>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;Portfolio</li>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;Technology</li>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;Industry</li>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;Management Team</li>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;Awards & Recognition</li>
                <li><i className="fa fa-chevron-right footer__icon"/>&nbsp;&nbsp;Product Development Process</li>
            </ul>
        </div>
        
        <div className="footer__box3">
            <h1>contact us</h1>
            <p>Career</p>
            <p>Contact Us</p>
            <br />
            <br />
            <br />
            <div>
              <p>Subscribe to Newsletter</p>
              <input type="email" placeholder="email" />
              <input type="submit" />
            </div>
        </div>
        
        <>
  
        </>
      </section>
      <Foot />
    </>
  )
}

export default Footer
