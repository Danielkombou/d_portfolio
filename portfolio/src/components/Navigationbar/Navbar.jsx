import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../public/Image/profile-home.png'
import light from '../../../public/Image/light.png'
import dark from '../../../public/Image/dark-btn.png'
import menu from '../../../public/Image/menu.png'
import close from '../../../public/Image/x.png'
import '../Navigationbar/Navbar.css'
import { useTheme } from '../Toggle/Toggle';
import Toggle from './ThemeIcon';


function Navbar() {

  const [isOpen , setIsOpen] = useState(false)

  const ToggleNav = ()=>{
    setIsOpen(!isOpen)
  }
  const {theme} = useTheme()
  
  
  return (
    <>
    <nav>
        <div>
              <Link to="/" >
                <img src={image} className='logo' />
              </Link>
        <ul className={isOpen ? 'open' : ''}>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/work">Work</Link>
            </li>
            <li>
            <Link to="/test">Testimonials</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <Link > 
              {/* <img src={light} className='mode'  /> */}
              <Toggle/>
            </Link>
            <li>
            <Link to="/download" className='down'>Download CV</Link>
            </li>
        </ul>
              <img src={isOpen ? close : menu} className='menu-icon' onMouseOver={ToggleNav} />
        </div>
    </nav>
    </>
  );
}

export default Navbar;
