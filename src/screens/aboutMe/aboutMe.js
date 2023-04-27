import React from 'react'
import './aboutMe.css'
import anon from '../../images/anon.png'

function AboutMe() {
  return (
    <div className='about__container' id='about-me'>
       <div>
        < img src={anon} alt='profile pic'/>
       </div>
       <div className='about__text'>
        <h1>About Me</h1>
        <p>Hello I'm an aspiring full stack web developer and recent grad from SMU coding bootcamp. I am currently in the Dallas, TX. area. I have a strong background laboring in the service industry.</p>
       </div>
    </div>
  )
}

export default AboutMe