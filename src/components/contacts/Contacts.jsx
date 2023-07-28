import React from 'react'
import {MdMarkEmailUnread} from 'react-icons/md';
import './contacts.css'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z1re8kt', 'template_sa690as', form.current, 'oIenP1MKTHITSYFb-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
<div className="container contact__container"> 
 <div className="contact_options"> 
  <article className="contact_option">
      <MdMarkEmailUnread className='contact_options-icons'/>
      <h4>Email</h4>
      <h5>deysubhangam@gmail.com</h5>
      <a href="mailto:deysubhangam@gmail.com">Send a message</a>
  </article>
  <article className="contact_option">
      <IoLogoWhatsapp className='contact_options-icons'/>
      <h4>WhatsApp</h4>
      <h5>7002138853</h5>
      <a href="http://api.whatsapp.com?phone=+917002138853">Send a message</a>
  </article>
  <article className="contact_option">
      <BsLinkedin className='contact_options-icons'/>
      <h4>LinkedIn</h4>
      <h5>Subhangam Dey</h5>
      <a href="https://www.linkedin.com/in/subhangam-dey-70275b221/">Connect or Send a message</a>
  </article>
</div>

{/* END OF CONTACT OPTIONS */}
  <form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required /> 
  <input type="email" name='email' placeholder='Your Email' required /> 
  <textarea name="message" rows="7" placeholder='Your Message' required >
  </textarea> <button type='submit' className='btn btn-primary' >Send Message</button>
  </form>
</div>

    </section>
  )
}

export default Contacts