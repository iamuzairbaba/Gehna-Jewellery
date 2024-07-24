import React from 'react';
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Jewels that fit your pallete'/>
      <h1 className='headtext__cormorant'>Our Speciality</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_classics flex__center'>
        <p className='app__specialMenu-menu_heading'>Timeless Classics</p>
        <div className='app__specialMenu-menu_items'>
          {data.classics.map((classic, index) => (
           <MenuItem key={classic.title + index} title={classic.title} price={classic.price} tags={classic.tags}/>
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu" />
      </div>
      <div className='app__specialMenu-menu_modern flex__center'>
        <p className='app__specialMenu-menu_heading'>Modern Expressions</p>
        <div className='app__specialMenu-menu_items'>
          {data.modern.map((modern, index) => (
            <MenuItem key={modern.title + index} title={modern.title} price={modern.price} tags={modern.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
