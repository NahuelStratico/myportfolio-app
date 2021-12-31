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
import './styles/home.css'
import './styles/about.css'

const About = () =>{

    
    const [activeNav, setActiveNav] = useState(false)
    const [ education, setEducation ] = useState(true)
    const [ experience, setExperience ] = useState(false)
    const stylesInitial = useSpring({
        from:{ opacity: 0 },
        config: { duration: 50 },
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus nemo amet officiis aliquam molestiae harum ratione veniam maxime distinctio quis minus minima quisquam expedita, reiciendis laboriosam nesciunt quos tempore esse ipsam accusantium sequi? Repudiandae quos, id dolorem, laborum vitae sed accusamus a labore nobis maxime veritatis quisquam, reiciendis illo.</p>
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
                                        className={`tab-item ${education ? "active" : ""}`}
                                        data-target="#education"
                                        onClick={handleClickEd}
                                        >
                                            education</button>
                                    <button type="button" className={`tab-item ${experience ? "active" : ""}`} data-target="#experience" onClick={handleClickEx}>experience</button>
                                </div>

                                
                                {education ? <Education /> : null}
                                
                                {experience ? <Experience /> : null}


                                <Button href="#" className='btn'>download cv</Button>
                                
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