import React, { useEffect, useState } from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import './style.css'
const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
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
