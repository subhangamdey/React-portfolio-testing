import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
const data=[
    {
        id : 1,
        img : IMG1,
        title : "HTML Project",
        liveDemo : "https://subhangamdey.github.io/HTML-form/",
        github : "https://github.com/subhangamdey/HTML-form"
    },

    {
        id : 2,
        img : IMG2,
        title : "CSS Project",
        liveDemo : "https://subhangamdey.github.io/CCS-Animation/",
        github : "https://github.com/subhangamdey/CCS-Animation"
    },
    {
        id : 3,
        img : IMG3,
        title : "Bootstrap Project",
        liveDemo : "https://subhangamdey.github.io/Advanced-bootstrap/",
        github : "https://github.com/subhangamdey/Advanced-bootstrap"
    },
    {
        id : 4,
        img : IMG4,
        title : "Javascript and jQuery Project",
        liveDemo : "https://subhangamdey.github.io/Drum-Kit/",
        github : "https://github.com/subhangamdey/Drum-Kit"
    },
    {
        id : 5,
        img : IMG5,
        title : "ReactJS major project",
        liveDemo : "https://my-app-subhangamdey.vercel.app/",
        github : "https://github.com/subhangamdey/React-portfolio-testing"
    },
    {
        id : 6,
        img : IMG6,
        title : "ReactJS mini project",
        liveDemo : "https://login-page-zeta-ecru.vercel.app/",
        github : "https://github.com/subhangamdey/Drum-Kit"
    }
]

const Portfolio = () => {
return (
<section id='portfolio'>
 <h5>My Recent Work</h5>
 <h2>Portfolio</h2>
    <div className="container portfolio_container">
    {
        data.map(portfolioItems => {
            return (
            <article key={portfolioItems.id} className='portfolio_item'> 
        <div className="portfolio_item-image">
            <img src={portfolioItems.img} alt=''/>
        </div>
        <h3>{portfolioItems.title}</h3>
        <div className='cta'>
            <a href={portfolioItems.github} className='btn' target='_blank'>Github</a> 
            <a href={portfolioItems.liveDemo} className='btn btn-primary' target='_blank'>LiveDemo</a>  
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