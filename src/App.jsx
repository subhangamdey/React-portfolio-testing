import React from 'react';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/portfolio';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App;