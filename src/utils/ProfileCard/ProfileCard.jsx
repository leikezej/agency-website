import React from 'react';
import './profileCard.css';

const ProfileCard = () => {
  return (
    <>
          <div class="card">
      <div class="img-bx">
        <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
      </div>
      <div class="content">
        <div class="detail">
          <h2>Emilia Roy<br /><span>Senior Designer</span></h2>
          <ul class="sci">
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileCard
