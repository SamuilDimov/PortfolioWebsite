import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image: IMG1,
    title: 'Playing Card Design With various Color Schemes',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1VT-FuIKzW6mewDI1Kw-KJvV_O4pvMdHu/view?usp=share_link'
  },
  {
    id:2,
    image: IMG2,
    title: 'Web-Shop Prototype using Adobe Illustrator and XD with personal logo and branding design',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/17VQpr0vc3CvMZM18TS5-RSxdUSmlgWhf/view?usp=share_link'
  },
  {
    id:3,
    image: IMG3,
    title: 'Weather Application using API',
    github: 'https://git.fhict.nl/I484474/semester-3-samuil-dimov-websiteapi',
    demo: 'https://admirable-palmier-7a7106.netlify.app/'
  },
  {
    id:4,
    image: IMG4,
    title: 'UI/UX Design a for Song request Application',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/15rLgTF3V0dlFBmhj73RcOD-k7wv4s_Hz/view?usp=share_link'
  },
  {
    id:5,
    image: IMG5,
    title: 'Mental Health-inspired Graphic with social commentary',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1SIgwn495NV8d6bfzfPB9wacIxLXAPiwd/view?usp=share_link'
  },
  {
    id:6,
    image: IMG6,
    title: 'Working Sheet I have developed for a Painting Service company in Germany with different color schemes',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1yfxWKW2sx49Q7lHlzUJLeJS8WrKvnYGb/view?usp=share_link'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} alt={title} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio