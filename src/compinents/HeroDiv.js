import React from 'react';
import styles from './HeroDiv.module.css';
import accreImage from '../image/accre.png'
import RefferelButton from '../Button/RefferelButton';

const HeroDiv = () => {
  return (
    <div className='container rounded-lg shadow-2xl p-6 m-6 bg-blue-100'>
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-0 justify-center items-center'>
        <div className='grid grid-rows-2 gap-1'>

             <div class="p-4 font-semibold text-lg md:text-5xl">Let’s <br/>Learn & Earn</div>
              <div class="p-4  text-smmd:text-2xl">Get a chance to win <br/> up to<span className='text-blue-400 p-2'>Rs. 15,000</span></div>
        </div>

            <div>
              <img src={accreImage} className='h-[400px] w-full bg-cover' alt='Hero Image' />
            </div>
        <div className='pl-4'>
          <RefferelButton text='Refer Now'/>
        </div>
      </div>

    </div>

  );
};

export default HeroDiv;
