import React from 'react';
import  SubHeading  from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter"/>
      <h1 className='headtext__cormorant'>Want To Hear back From Us</h1>
      <p className='p__opensans'>And Know About Our Store</p>
      <div className='app__newsletter-input flex__center'>
        <input type="email" name="" id="" placeholder='Enter your phone number' />
        <button type="button" className='custom__button'>Subscribe</button>
      </div>
    </div>
  </div>
);

export default Newsletter;
