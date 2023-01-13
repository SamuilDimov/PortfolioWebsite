import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import ParallaxCard from 'react-parallax-card'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Samuil Dimov</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          
        </div>
        <ParallaxCard
 
  enableRotate
  enableTransform
  style={{ margin: '0 auto',position:'relative', top:150,width: 240, height: 240 }}>

  <img src={ME} alt="me"  style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />

  <img src={ME} alt="me"  style={{ top: '80%', left: '100%' }} />



</ParallaxCard>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header