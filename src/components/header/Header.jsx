import React, { useState } from 'react' 
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './headerSocials'
const Header = () => {
    const [activeNav,setActiveNav]=useState('#');
return (
<header>
<div className="container header_container">
<h5>Hello I am</h5>
<h1>Subhangam Dey</h1>
<h5 className="text-light">Fullstack Developer</h5> 
<CTA />
<Socials />
<center>
    <div className="me">
    <img src={ME} alt="me" />
</div>
</center>
<a href='#contacts' onClick={ () => setActiveNav("#contacts")} className={activeNav=== '#contacts' ? 'active scroll_down' : 'scroll_down'}>Scroll Down</a>
</div>
</header>)
}
export default Header