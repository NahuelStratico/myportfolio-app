import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '../components/styled'
import Nav from '../components/nav/Nav'
import './styles/home.css'
import image from '../img/nahuel.png'
import Header from '../components/header/Header'

const Home = () => {

    const [activeNav, setActiveNav] = useState(false)

   

    return(
        // Main start
        <div className="main">

            <Header setActiveNav={setActiveNav} activeNav={activeNav}/>

            {
                activeNav ? <Nav /> 
                : 
                <section className='home-section align-item-center'>
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="home-text">
                                <p>Hello, I'm</p>
                                <h1>Nahuel Stratico</h1>
                                <h2>Frontend web developer</h2>
                                {/* <Link className='btn' to="/about">More about me</Link>
                                <Link className='btn'  to="/portfolio">portfolio</Link> */}
                                <Link className='btn' to="/about"><Button>More about me</Button></Link>
                                <Link className='btn' to="/portfolio"><Button>portfolio</Button></Link>
                            </div>
                            <div className="home-img">
                                <div className="img-box">
                                    <img src={image} alt="profile-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Home