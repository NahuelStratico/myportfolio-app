import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '../components/styled'
import { useSpring, animated } from 'react-spring'
import Nav from '../components/nav/Nav'
import './styles/home.css'
import image from '../img/nahuel.png'
import Header from '../components/header/Header'

const Home = () => {

    const [activeNav, setActiveNav] = useState(false)
    const styles = useSpring({to:{ opacity: activeNav ? 0 : 1 }})
    const stylesNav = useSpring({to: { opacity: activeNav ? 1 : 0 }})
    
   

    return(
        // Main start
        <div className="main">

            <Header setActiveNav={setActiveNav} activeNav={activeNav}/>

            {
                activeNav ? <Nav style={stylesNav} /> 
                : 
                <animated.section style={styles} className='home-section align-item-center'>
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="home-text">
                                <p>Hello, I'm</p>
                                <h1>Nahuel Stratico</h1>
                                <h2>Frontend web developer</h2>
  
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
                </animated.section>
            }

        </div>
    )
}

export default Home