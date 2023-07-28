import React,{useState} from 'react'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a> 
    <a href="#contacts" onClick={ () => setActiveNav("#contacts")} className={activeNav=== '#contacts' ? 'active btn btn_primary' : 'btn btn_primary'}> Let Talk</a> 
    </div>
  )
}

export default CTA
