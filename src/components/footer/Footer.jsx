import React from 'react'
import './footer.css'
import {BsInstagram, BsLink} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>SamuilDimov</a>
      <ul className='permaLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/goodjobcards/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/samuil-dimov-590589256/"><BsFacebook/></a>
        <a href="https://www.facebook.com/samuil.dddimov/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Samuil Dimov. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer