import React from 'react';
import './foot.css';

const Foot = () => {
  return (
    <footer className="foot">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>&copy; 2023 Bugtech Bug Providers | Philippines </p>
            <ul className="foot__links">
              <li><a href="/"><img src="https://img.icons8.com/color-glass/256/facebook-new.png" alt="" /></a></li>
              <li><a href="/"><img src="https://img.icons8.com/color-glass/256/linkedin.png" alt="" /></a></li>
              <li><a href="/"><img src="https://img.icons8.com/color-glass/256/twitter.png" alt="" /></a></li>
              <li><a href="/"><img src="https://img.icons8.com/color-glass/256/facebook-new.png" alt="" /></a></li>
              <li><a href="/"><img src="https://img.icons8.com/color-glass/256/facebook-messenger.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Foot;
