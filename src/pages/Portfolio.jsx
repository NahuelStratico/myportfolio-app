import { useState, useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import ThemeContext from '../components/Context/ThemeContext';

import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import './styles/home.css'
import './styles/about.css'
import './styles/portfolio.css'
import Proyects from '../components/Proyects'
import Switch from '../components/Switch'

const Portfolio = ({data}) => {

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

                <Header activeNav={activeNav} setActiveNav={setActiveNav}/>
                <Switch />
                {
                    activeNav ? <Nav style={stylesNav} setActiveNav={setActiveNav} />
                    :
                    <animated.section style={styles} className="portfolio-section sec-padding">
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
                    </animated.section>
                }

            </animated.div>
        </div>
    )
}

export default Portfolio