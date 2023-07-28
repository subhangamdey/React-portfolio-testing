import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './Experience.css'

const Experience = () => {
  return (
    <section id='experience'>
     <h5>What Skills I Have</h5> 
     <h2>My Experience</h2>
        <div className="container experience_container">
            <div className="experience_frontend">
            <h3>Frontend Development</h3>
        <div className="experience_content">
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Advanced</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Advanced</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Advanced</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>jQuery</h4>
        <small className='text-light'>Advanced</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>Twitter Bootstrap</h4>
        <small className='text-light'>Advanced</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>ReactJS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
    </article>
</div>
</div>
<div className="experience_backend">
    <h3>Backend Development</h3>
    <div className='experience_content'>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>NodeJS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>ExpressJS</h4>
        <small className='text-light'>Beginner</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>Git & GitHub</h4>
        <small className='text-light'>Above Intermediate</small>
        </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icons'/>
        <div>
        <h4>EmailJS</h4>
        <small className='text-light'>Beginner</small>
        </div>
    </article>
    </div>
</div>
</div>
</section>
  )
}

export default Experience