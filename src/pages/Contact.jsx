import { useState } from 'react'
import Button from '../components/styled'
import { useSpring, animated } from 'react-spring'
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import './styles/home.css'
import './styles/contact.css'

const Contact = () => {

    const [activeNav, setActiveNav] = useState(false)
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

    return(
        <animated.div style={stylesInitial} className="main">

            <Header activeNav={activeNav} setActiveNav={setActiveNav} />

            {
                activeNav ? <Nav style={stylesNav}/>
                :
                <animated.section style={styles} className="contact-section sec-padding">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>contact me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contact-form">
                                <form>
                                    <div className="row">
                                        <div className="input-group">
                                            <input type="text" placeholder='Name' className='input-control required'/>
                                        </div>
                                        <div className="input-group">
                                            <input type="text" placeholder='Email' className='input-control required'/>
                                        </div>
                                        <div className="input-group">
                                            <input type="text" placeholder='Subject' className='input-control required'/>
                                        </div>
                                        <div className="input-group">
                                            <textarea placeholder='Message' className='input-control'required></textarea>
                                        </div>
                                        <div className="submit-btn">
                                            <Button>
                                                send message
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <h3>Email</h3>
                                    <p>straticonahuel@gmail.com</p>
                                </div>
                                <div className="contact-info-item">
                                    <h3>Phone</h3>
                                    <p>11 68791292</p>
                                </div>
                                <div className="contact-info-item">
                                    <h3>Follow me</h3>
                                    <div className="social-links">
                                        <a href="#" target="_blank"><IoLogoGithub/></a>
                                        <a href="#" target="_blank"><IoLogoLinkedin /></a>
                                        <a href="#" target="_blank"><IoLogoInstagram /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.section>
            }

        </animated.div>
    )
}

export default Contact