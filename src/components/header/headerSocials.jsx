import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className="header_socials">
      <a href='https://www.linkedin.com/in/subhangam-dey-70275b221/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/subhangamdey' target='_blank'><BsGithub /></a>
    </div>
  )
}

export default Socials;