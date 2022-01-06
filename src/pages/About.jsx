import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Education from '../components/Education'
import Experience from '../components/Experience'
import { skills } from '../components/ArrayList'
import Button from '../components/styled'
import image from '../img/nahuel.png'
import cv from '../img/cv-nahuel-stratico.pdf'
import './styles/home.css'
import './styles/about.css'

const About = () =>{

    
    const [activeNav, setActiveNav] = useState(false)
    const [ education, setEducation ] = useState(false)
    const [ experience, setExperience ] = useState(true)
    const stylesInitial = useSpring({
        from:{ opacity: 0 },
        config: { duration: 200 },
        to: {opacity: 1 }
    })
    const styles = useSpring({
        to:{ opacity: activeNav ? 0 : 1 },
        leave:{ opacity: 0 }
    })
    const stylesNav = useSpring({
        from:{ opacity: 0 },
        to: { opacity: activeNav ? 1 : 0 },
        leave:{ opacity: 0 }
    })

    const handleClickEd = () => {
        setEducation(true)
        setExperience(false)
    }
    const handleClickEx = () => {
        setExperience(true)
        setEducation(false)
    }

    return(
        <animated.div style={stylesInitial} className="main">
            <Header activeNav={activeNav} setActiveNav={setActiveNav}/>

            {
                activeNav ? <Nav style={stylesNav}/>
                :
                <animated.section style={styles} className="about-section sec-padding">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>about me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="about-img">
                                <div className="img-box">
                                    <img src={image} alt="about img" />
                                </div>
                            </div>
                            <div className="about-text">
                                <p>I am Frontend developer with three years of freelance experience. My focus is in React.
                                <br />
                                I'm very interested in learning more about technology and adding experience in the are of web development and mobile.
                                I am passionate about challenges, learning and working as a team.</p>
                                <h3>Skills</h3>
                                <div className="skills">
                                    {
                                            skills.map((item, index) => (
                                                <div className="skill-item" key={index}>
                                                    {item}
                                                </div>
                                            ))
                                        
                                    }
                                </div>

                                <div className="about-tabs">
                                    <button 
                                        type="button" 
                                        className={`tab-item ${experience ? "active" : ""}`} 
                                        data-target="#experience" onClick={handleClickEx}
                                        >
                                        experience
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`tab-item ${education ? "active" : ""}`}
                                        data-target="#education"
                                        onClick={handleClickEd}
                                        >
                                            education
                                    </button>
                                </div>

                                
                                {experience ? <Experience /> : null}

                                {education ? <Education /> : null}
                                

                                <Link to={cv} target="_blank">
                                    <Button className='btn'>download cv</Button>
                                </Link>
                                
                                <Link to="/contact">
                                    <Button href="#" className='btn'>contact me</Button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </animated.section>
            }

        </animated.div>
        
    )
}

export default About