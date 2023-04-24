import React, { useState, useEffect } from 'react';
import './style.css';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { BsPersonCircle , BsPeaceFill } from 'react-icons/bs';
import {MdOutlineAttachMoney}  from 'react-icons/md';
import 'animate.css';

const Banner = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.querySelector('.banner');
      const { top, bottom } = bannerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom >= 0 && !animationTriggered) {
        setAnimationTriggered(true);
        bannerElement.classList.add('animate__animated', 'animate__backInRight');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);

  return (
    <div className='banner'>
      <div className="banner-item">
        <div className="banner-icon">
          <TfiHeadphoneAlt />
        </div>
        <div className='banner-data '>
          <p>Expert support</p>
          <p>Contact support team</p>
        </div>
      </div>

      <div className="banner-item">
        <div className="banner-icon">
          <BsPeaceFill />
        </div>
        <div className='banner-data'>
          <p>Peaceful places</p>
          <p>Safe and trustworthy</p>
        </div>
      </div>

      <div className="banner-item">
        <div className="banner-icon">
          <BsPersonCircle />
        </div>
        <div className='banner-data'>
          <p>Exclusive agent</p>
          <p>Leading travel agency</p>
        </div>
      </div>

      <div className="banner-item">
        <div className="banner-icon">
          <MdOutlineAttachMoney />
        </div>
        <div className='banner-data'>
          <p>Incredible price</p>
          <p>Best price guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
