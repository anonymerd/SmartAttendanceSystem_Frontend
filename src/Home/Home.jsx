import React from 'react';
import './Home.css';
import Loginform from './Loginform/Loginform';
import 'dotenv/config';

console.log(process.env);

const Home = () => {
  // const login = () => {};

  return (
    <div className='home-page'>
      <div className='heading'>
        <h1>Attendance Capturing Platform</h1>
      </div>
      <div className='login-form'>
        <Loginform />
      </div>
    </div>
  );
};

export default Home;
