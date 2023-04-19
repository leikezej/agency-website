import React from "react";
import './contact.css';

const Contact = () => {

  return (
    <section className="contact__wrapper">
      <div className="contact__title-wrap">
          <h1 className="contact__title">Contact</h1>
      </div>
      
      <div className="contact__container">
          <div className="contact__box-right">
              <h3 className="contact__second-title">To get your concerns underway, <br />simply contact us!</h3>
              <div className="contact__divider"></div>
             <br />
             <div className="left__box1">
              <h4>In Australia</h4>
              <h4>Address:</h4> <address>Level 11/580 Collins St, Melbourne VIC 3000, Australia</address>
                <h4>Tel:</h4><p>(+61) 414 231 356</p>
             
             </div>
             <br />
             <div className="left__box2">
                <h4>In Viet Nam</h4>
                <h4>Address:</h4><address>Level 11/580 Collins St, Melbourne VIC 3000, Australia 6Ath Floor, C Tower, Central Point Building, No 219 Trung Kinh Str, Cau Giay Dist, Ha Noi, Vietnam.​</address>
                <h4>Tel:</h4><p>(+84) 24 6654 2283</p>
             </div>
          </div>
          
          <div className="contact__box-left">
            <input type="text" placeholder="Your Name" /><br />
            <input type="email" placeholder="Your Email" /><br />
            <input type="text" placeholder="Your Phone" /><br />
            <input type="textarea" placeholder="Message" /><br />
            
            <div className="captcha__box">
              <input type="checkbox" />&nbsp;
              <p className="captcha__text">I'm not a robot</p>&nbsp;&nbsp;&nbsp;
              <img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/1x/external-captcha-ecommerce-basic-1-sbts2018-flat-sbts2018.png" alt="captcha" />
            </div>
            
            <button>Send Message</button>
          </div>
      </div>
    </section>
  )
}

export default Contact;