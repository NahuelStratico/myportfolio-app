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
    const stylesInitial = useSpring({
        from:{ opacity: 0 },
        config: { duration: 50 },
        to: {opacity: 1 }
    })
    const styles = useSpring({
        to:{ opacity: activeNav ? 0 : 1 },
        leave:{opacity: 0}
    })
    const stylesNav = useSpring({
        from:{ opacity: 0 },
        to: { opacity: activeNav ? 1 : 0 },
        leave:{opacity: 0}
    })
    
   

    return(
        // Main start
        <animated.div style={stylesInitial} className="main">

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

        </animated.div>
    )
}

export default Home