import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiInstagram} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
 /*===========Function for the EmailJS=================*/
function Contact() {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm('service_za5fb0h', 'template_tq54xvp', form.current, 'E2vTvCS-1tCdd8Mzh')
   

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>samuildimov347@gmail.com</h5>
            <a href="mailto:samuildimov347@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <SiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@goodjobcards</h5>
            <a href="https://www.instagram.com/goodjobcards/?hl=en" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+4915221685513</h5>
            
            <a href="https://api.whatsapp.com/send?phone=+4915221685513" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7"required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact