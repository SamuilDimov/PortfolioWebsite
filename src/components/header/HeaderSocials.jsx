import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {RiGitlabFill} from 'react-icons/ri'
import {FiDribbble} from 'react-icons/fi'
{/*=======================SOCIALS FOR THE LEFT CORNER OF MY HEADER========*/}
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/samuil-dimov-590589256/" target="_blank"><BsLinkedin/></a>
      <a href="https://git.fhict.nl/" target="_blank"><RiGitlabFill/></a>
      <a href="https://dribbble.com/SamuilDimov?onboarding=true" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
