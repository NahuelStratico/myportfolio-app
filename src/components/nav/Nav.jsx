import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import ThemeContext from '../Context/ThemeContext';

import '../../pages/styles/home.css'
import './nav.css'

const Nav = ({style,  setActiveNav}) => {

    const { darkMode } = useContext(ThemeContext)
    const theme = JSON.parse(localStorage.getItem('theme'));

    const close = () =>{
        setActiveNav(false)
    }

    return(
        <nav className="nav">
            <animated.div style={style} className='nav-inner'>
                <ul>
                    <li><NavLink to="/" className={theme ? 'nav-item dark' :'nav-item'} onClick={() => close()}>Home</NavLink></li>
                    <li><NavLink to="/about" className={theme ? 'nav-item dark' :'nav-item'} onClick={() => close()}>About</NavLink></li>
                    <li><NavLink to="/portfolio" className={theme ? 'nav-item dark' :'nav-item'} onClick={() => close()}>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className={theme ? 'nav-item dark' :'nav-item'} onClick={() => close()}>Contact</NavLink></li>
                </ul>
            </animated.div>
        </nav>
    )
}

export default Nav