import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name:'Tina Snow',
    review:'Bahti pekaniq ludak mnogo gi vurti tiq saitove dizaini i tui natatuk malko e baven ama sa opravq prosto mu trqa vreme'
  },
  {
    avatar: AVTR2,
    name:'Ivana Georgieva',
    review:'Bahti pekaniq ludak mnogo gi vurti tiq saitove dizaini i tui natatuk malko e baven ama sa opravq prosto mu trqa vreme'
  },
  {
    avatar: AVTR3,
    name:'Stamat Domakchiev',
    review:'Bahti pekaniq ludak mnogo gi vurti tiq saitove dizaini i tui natatuk malko e baven ama sa opravq prosto mu trqa vreme'
  },
  {
    avatar: AVTR4,
    name:'Ivan Petrov',
    review:'Bahti pekaniq ludak mnogo gi vurti tiq saitove dizaini i tui natatuk malko e baven ama sa opravq prosto mu trqa vreme'
  }

]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
   
      </Swiper>
    </section>
  )
}

export default Testimonials
