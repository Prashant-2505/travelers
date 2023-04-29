import React, { useEffect, useState } from 'react'
import './style.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'



const TopDestination = () => {

    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const bannerElement = document.querySelector('.cards');
        const { top, bottom } = bannerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight && bottom >= 0 && !animationTriggered) {
          setAnimationTriggered(true);
          bannerElement.classList.add('animate__animated', 'animate__bounceInUp');
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
                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-overlay"></div>
                    <img className='card-img' src='https://images.unsplash.com/photo-1593844311291-2ec0164643c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VqcmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60' alt="" />
                    <p className='card-data'>Gujrat</p>
                    <div className='card-hover-data'>
                        <BsFillArrowRightCircleFill className='card-icon'/>
                        <button>Explore more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopDestination
