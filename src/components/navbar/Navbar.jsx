import React, { useEffect, useState } from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import './style.css'
const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
   /* This is a React hook called `useEffect` that is used to perform side effects in functional
   components. In this case, it is used to add an event listener to the window object that listens
   for the `scroll` event. When the user scrolls, the `handleScroll` function is called, which
   checks the current scroll position and updates the state of `showNavbar` and `lastScrollY`
   accordingly. The `useEffect` hook is also passed a dependency array `[lastScrollY]`, which means
   that the effect will only be re-run if the value of `lastScrollY` changes. */
    useEffect(() => {
        function handleScroll() {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
          setLastScrollY(currentScrollY);
        }
    
        window.addEventListener('scroll', handleScroll);
    
      }, [lastScrollY]);
    
    return (
        <div className={`Navbar ${showNavbar ? '' : 'navbar--hidden'}`}>
            <div className='logo'>travellers</div>
            <div className='nav'>
                <ul className="nav-itmes">
                    <li className='items'>Home</li>
                    <li className='items'>About</li>
                    <li className='items'>Contact</li>
                </ul>
            </div>
            <div className='contact'>
                <p> <FiPhoneCall className='icon'/>123456</p>
            </div>
        </div>
    )
}

export default Navbar
