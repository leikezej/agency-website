import React, { useState } from 'react';
import './App.css';

import ProfileCard from './ProfileCard';

const Profile = () => {
  const [ name, setName ] = useState('Jepski');
  const [ position, setPosition ] = useState('Manager');
  const [ about, setAbout ] = useState('We dont let obstacles and challenges defeat us. We collaborate with companies from small start-ups to large enterprises in Australia to deliver brilliant technological products and transit seamlessly in the modern');

  return (
    <div className="App">
        <ProfileCard name={name} position={position} about={about}/>
        <ProfileCard name={name} position={position} about={about}/>
        <ProfileCard name={name} position={position} about={about}/>
    </div>
  )
}

export default Profile