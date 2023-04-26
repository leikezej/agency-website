import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const handleEmail = (e) => {
    e.preventDefault();
    console.log('sending');
  };


  return (
    <section className="contact__wrapper">
      <div className="contact__title-wrap">
          {/* <h1 className="contact__title">Contact</h1> */}
          {/* <p>contact us</p> */}
          
          <div className="text1">Contact</div>
         <div className="text2">Contact Us</div>
      </div>


      <div className="contact__container">
          <div className="contact__box-right">
              <h3 className="contact__second-title">To get your <i>concerns</i> underway, <br />simply <i>contact</i> us!</h3>
              <div className="contact__divider"></div>
             <div className="left__box1">
              <h4>In Australia 🇦🇺 </h4>
              <ul>
                <li><i className="fa fa-home" />&nbsp;&nbsp;<b>Address:</b>&nbsp;Level 11/580 Collins St, Melbourne VIC 3000, Australia</li>
                <li><i className="fa fa-fax" />&nbsp;&nbsp;<b>Tel:</b>(+61) 414 231 356</li>
            </ul>
             </div>
             <br />
             <br />
             <div className="left__box2">
                <h4>In Vietnam 🇻🇳 </h4>
                <ul>
                  <li><i className="fa fa-home" />&nbsp;&nbsp;<b>Address:</b>&nbsp;No 219 Trung Kinh Str, Cau Giay Dist, Ha Noi, Vietnam</li>
                  <li><i className="fa fa-fax" />&nbsp;&nbsp;<b>Tel:</b>(+84) 24 6654 2283</li>
                </ul>
             </div>
          </div>

          <div className="contact__box-left">
              <form  ref={emailjs} onSubmit={handleEmail}>
                <input type="text" placeholder="Your Name" /><br />
                <input type="email" placeholder="Your Email" /><br />
                <input type="text" placeholder="Your Phone" /><br />
                <input type="textarea" placeholder="Message" /><br />
              </form>

            <div className="captcha__box">
              <input type="checkbox" />&nbsp;
              <p className="captcha__text">I'm not a robot</p>&nbsp;&nbsp;&nbsp;
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/640px-RecaptchaLogo.svg.png" alt="captcha" />
            </div>
            
            <button type="submit">Send Message</button>
          </div>
      </div>
    </section>
  )
}

export default Contact;