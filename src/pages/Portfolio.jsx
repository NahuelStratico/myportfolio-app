import { useState } from 'react'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import './styles/home.css'
import './styles/about.css'
import './styles/portfolio.css'
import Proyects from '../components/Proyects'

const Portfolio = ({data}) => {

    const [activeNav, setActiveNav] = useState(false)

    return(
        <div className="main">

            <Header activeNav={activeNav} setActiveNav={setActiveNav}/>

            {
                activeNav ? <Nav />
                :
                <section className="portfolio-section sec-padding">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>recent work</h2>
                            </div>
                        </div>
                        <div className="row">
                            <Proyects data={data}/>
                        </div>
    
                    </div>
                </section>
            }

        </div>
    )
}

export default Portfolio