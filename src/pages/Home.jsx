import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
// import Button from '../components/styled'
import { useSpring, animated } from 'react-spring'
import ThemeContext from '../components/Context/ThemeContext';


import Nav from '../components/nav/Nav'
import './styles/home.css'
import image from '../img/nahuel.png'
import Header from '../components/header/Header'
import Switch from '../components/Switch'

const Home = () => {

    const [activeNav, setActiveNav] = useState(false)
    const { theme } = useContext(ThemeContext)

    const stylesInitial = useSpring({
        from:{ opacity: 0 },
        config: { duration: 200 },
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
        <div className={theme ? 'body dark': 'body'}>
            <animated.div style={stylesInitial} className="main">
               
                <Header setActiveNav={setActiveNav} activeNav={activeNav}/>
                <Switch />
                {
                    activeNav ? <Nav style={stylesNav}  setActiveNav={setActiveNav}/> 
                    : 
                    <animated.section style={styles} className='home-section align-item-center'>
                        <div className="container">
                        
                                <div className="row align-item-center">
                                        <div className="home-text">
                                            <p className={theme? 'p dark' : 'p'}>Hello, I'm</p>
                                            <h1 className={theme? 'h1 dark' : 'h1'}>Nahuel Stratico</h1>
                                            <h2 className={theme? 'h2 dark' : 'h2'}>Frontend web developer</h2>
            
                                            <Link className={ theme ? 'btn dark' : 'btn'} to="/about">  
                                                   More about me                                        
                                            </Link>
                                            <Link className={ theme ? 'btn dark' : 'btn'} to="/portfolio">
                                                portfolio
                                            </Link>
                                        </div>
                                        <div className="home-img">
                                            <div className={ theme ? 'img-box dark' : 'img-box'}>
                                                <img src={image} alt="profile-img" />
                                            </div>
                                        </div>
                                </div>
                            
                        </div>
                    </animated.section>
                }
            </animated.div>
        </div>
    )
}

export default Home