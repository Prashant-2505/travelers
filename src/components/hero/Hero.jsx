import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import traveler from '../../assets/image/traveler.webp'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const heroImageRef = useRef(null);
  const heroDataRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = heroImageRef.current;
      const dataElement = heroDataRef.current;
      const { top, bottom } = imageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom >= 0 && !animationTriggered) {
        setAnimationTriggered(true);
        imageElement.classList.add('animate__animated', 'animate__fadeInLeft');
        dataElement.classList.add('animate__animated', 'animate__fadeInRight');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);

  return (
    <div className='hero'>
      <div className='hero-image-div' ref={heroImageRef}>
        <img className='hero-image' src={traveler} alt='' />
      </div>
      <div className='hero-data' ref={heroDataRef}>
        <div className='heading'>
          <h3>Travelers specializes in</h3>
          <h3>
            small <span className='heading-span'>group vacations</span>
          </h3>
        </div>
        <div className='para'>
          <p>
            <BsArrowRightCircleFill className='para-icon' />
            A good traveler has no fixed plans
          </p>
          <p> an unexpected plans always</p>
          <p> bring thrills in boring life</p>
        </div>
        <div className='para'>
          <p>
            <BsArrowRightCircleFill className='para-icon' />
            Places to stay around INDIA
          </p>
          <p> India is most diverse country</p>
          <p> there is many gems to go.</p>
        </div>
        <div className='hero-buttons'>
          <button onClick={()=>navigate('/about')} className='btn-1'>about company</button>
          <button className='btn-2'>discover tour</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
