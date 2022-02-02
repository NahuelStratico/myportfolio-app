import { useState, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';

import ThemeContext from '../components/Context/ThemeContext';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import Form from '../components/Form';
import Switch from '../components/Switch';
import './styles/home.css';
import './styles/contact.css';

const Contact = () => {

    const [activeNav, setActiveNav] = useState(false);
    const { theme } = useContext(ThemeContext);

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

    return(
        <div className={theme ? 'body dark': 'body'}>
            <animated.div style={stylesInitial} className="main">

                <Header activeNav={activeNav} setActiveNav={setActiveNav} />
                <Switch/>
                {
                    activeNav ? <Nav style={stylesNav} setActiveNav={setActiveNav} />
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
                                    <Form />
                                </div>
                                <div className="contact-info">
                                    <div className="contact-info-item">
                                        <h3>Email</h3>
                                        <p>straticonahuel@gmail.com</p>
                                    </div>
                                    <div className="contact-info-item">
                                        <h3>Follow me</h3>
                                        <div className="social-links dark">
                                            <a className={theme ? 'dark' : ''} href="https://github.com/NahuelStratico" target="_blank"><IoLogoGithub/></a>
                                            <a className={theme ? 'dark' : ''} href="https://www.linkedin.com/in/nahuelstratico/" target="_blank"><IoLogoLinkedin /></a>
                                        </div>
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

export default Contact