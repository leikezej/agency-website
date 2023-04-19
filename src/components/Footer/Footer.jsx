import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>&copy; 2023 PowerGate | Australia</p>
            <ul className="footer__links">
              <li><a href="#"><img src="https://img.icons8.com/color-glass/256/facebook-new.png" alt="" /></a></li>
              <li><a href="#"><img src="https://img.icons8.com/color-glass/256/linkedin.png" alt="" /></a></li>
              <li><a href="#"><img src="https://img.icons8.com/color-glass/256/twitter.png" alt="" /></a></li>
              <li><a href="#"><img src="https://img.icons8.com/color-glass/256/facebook-new.png" alt="" /></a></li>
              <li><a href="#"><img src="https://img.icons8.com/color-glass/256/facebook-messenger.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
