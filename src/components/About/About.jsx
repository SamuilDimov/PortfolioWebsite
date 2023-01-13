import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {MdWorkOutline} from 'react-icons/md'
import {HiUsers} from 'react-icons/hi'
import {GoProject} from 'react-icons/go'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
       <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
       </div>

       <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <MdWorkOutline className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className='about__card'>
            <HiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Worldwide</small>
          </article>
          <article className='about__card'>
            <GoProject className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed Projects</small>
          </article>
        </div>
        <p>Greetings! My name is Samuil Dimov and I am currently studying Front-End development at Fontys in Eindhoven. I am very passionate about UI/UX Design, Graphic Design, Video Editing and drawing.
          I have worked for 1 and a half years in an Advertisement company in Germany which helped me a lot in the design field. One of my biggest passions aside from design is sleight of hand. Therefore,
          I have designed various graphics for playing cards alongside logos, banners, business cards, Web-Design and merchandise.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
      </div>
    </section>
  )
}

export default About