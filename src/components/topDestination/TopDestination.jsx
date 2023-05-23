import React, { useEffect, useState } from 'react';
import './style.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import cardApi from '../../apiHelper/cardApi';

const TopDestination = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.querySelector('.cards');
      const { top, bottom } = bannerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom >= 0 && !animationTriggered) {
        setAnimationTriggered(true);
        bannerElement.classList.add('animate__animated', 'animate__fadeIn');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);

  return (
    <div className='topDestination'>
      <div className='topDestination-heading'>
        <div>
          <h3>TOP DESTINATION</h3>
          <p>This is the most popular destination in the last month</p>
        </div>
        <div className='topDestination-btn'>
          <button>ALL DESTINATION</button>
        </div>
      </div>
      <div className="cards">
        {cardApi.map((data) => (
          <Link to={`/packages/${data.id}`} key={data.id}>
            <div className="card">
              <div className="card-overlay"></div>
              <img className='card-img' src={data.url} alt="" />
              <div className='card-data'><p>{data.name}</p></div>
              <div className='card-hover-data'>
                <BsFillArrowRightCircleFill className='card-icon' />
                <button>Explore more</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopDestination;
