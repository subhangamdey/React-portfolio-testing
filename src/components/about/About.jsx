import React from 'react'
import ME from '../../assets/me-about.jpg'
import {LuFolderGit2} from 'react-icons/lu'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Let Us Know</h5>
      <h2>About Me</h2>
      
      <center>
      <div className="container about_container">
        
        <div className="about_content"> 
          <div className="about_cards">
            
          </div>
          <p>I am a coding enthusiast with primary interest in Full Stack Web Development and is also
             interested in learning new things and technologies through reading. Additionally, I am very good
             at teamwork and communication as I have been on vital positions in important university clubs
             along with winning and participating in various school competitions.</p>
          
        </div>
      </div>
      </center>
    </section>
  )
}

export default About