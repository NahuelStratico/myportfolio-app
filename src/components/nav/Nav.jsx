import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { ThemeContext } from '../ThemeContext';

import '../../pages/styles/home.css'
import './nav.css'

const Nav = ({style,  setActiveNav}) => {

    const { darkMode } = useContext(ThemeContext)

    const close = () =>{
        setActiveNav(false)
    }

    return(
        <nav className="nav">
            <animated.div style={style} className='nav-inner'>
                <ul>
                    <li><NavLink to="/" className={darkMode ? 'nav-item dark' :'nav-item'} onClick={() => close()}>Home</NavLink></li>
                    <li><NavLink to="/about" className={darkMode ? 'nav-item dark' :'nav-item'} onClick={() => close()}>About</NavLink></li>
                    <li><NavLink to="/portfolio" className={darkMode ? 'nav-item dark' :'nav-item'} onClick={() => close()}>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className={darkMode ? 'nav-item dark' :'nav-item'} onClick={() => close()}>Contact</NavLink></li>
                </ul>
            </animated.div>
        </nav>
    )
}

export default Nav