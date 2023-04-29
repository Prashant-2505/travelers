import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Hero = () => {
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
        <img className='hero-image' src='https://media.istockphoto.com/id/1141196125/photo/hiking-in-the-allgaeu-alps.jpg?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=TQF-GqLyM0jEtlSKEp-vjHr5mX8GpTrTyMrLWFKSFEI=' alt='' />
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
          <button className='btn-1'>about company</button>
          <button className='btn-2'>discover tour</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
