import React, { useEffect, useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineCloseSquare } from 'react-icons/ai'

import './style.css'
const Navbar = () => {

  const [clicked, setClicked] = useState(false)
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

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className={`Navbar ${showNavbar ? '' : 'navbar--hidden'} ${clicked ? 'mobile-nav' : ''}`}>
      <div className='logo'>travellers</div>
      <div className={`${clicked?'nav active':'nav'}`}>
        <ul className='nav-items'>
          <li className='items'>Home</li>
          <li className='items'>About</li>
          <li className='items'>Contact</li>
        </ul>
        <button className='sign-up'>sign-up</button>
      </div>
  
      <div className="mobile" onClick={handleClick}>
        {clicked ? (<AiOutlineCloseSquare className='close' />) : (<RxHamburgerMenu className='hamburger' />)}
      </div>
    </div>
  )
}

export default Navbar
