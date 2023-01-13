import React from 'react'
import './nav.css'
import {RiHomeLine} from 'react-icons/ri'
import {FiUser} from 'react-icons/fi'
import {FiBook} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import {useState} from 'react'

function Nav() {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeLine/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBook/></a>
      
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageSquare/></a>
      
    </nav>
  )
}

export default Nav