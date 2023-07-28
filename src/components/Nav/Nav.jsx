import React, { useState } from 'react'
import {FaHome} from 'react-icons/fa'
import {BiSolidUserRectangle} from 'react-icons/bi'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {TfiWrite} from 'react-icons/tfi'
import {FaPencilRuler} from 'react-icons/fa'
import './nav.css'

const Nav = () => {
  const [activeNav,setActiveNav] = useState("#");
  return (
    <nav>
        <a href='#' onClick={ () => setActiveNav("#")} className={activeNav=== '#' ? 'active' : ''}><FaHome /></a>
        <a href='#about' onClick={ () => setActiveNav("#about")} className={activeNav=== '#about' ? 'active' : ''}><BiSolidUserRectangle /></a>
        <a href='#contacts' onClick={ () => setActiveNav("#contacts")} className={activeNav=== '#contacts' ? 'active' : ''}><BsFillJournalBookmarkFill /></a>
        <a href='#portfolio' onClick={ () => setActiveNav("#portfolio")} className={activeNav=== '#portfolio' ? 'active' : ''}><FaPencilRuler /></a>
        <a href='#experience' onClick={ () => setActiveNav("#experience")} className={activeNav=== '#experience' ? 'active' : ''}><TfiWrite /></a>
    </nav>
  )
}

export default Nav
