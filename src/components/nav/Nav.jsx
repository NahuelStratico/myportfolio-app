import { Link, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import '../../pages/styles/home.css'
import './nav.css'

const Nav = ({style}) => {


    return(
        <nav className="nav">
            <animated.div style={style} className="nav-inner">
                <ul>
                    <li><NavLink to="/" className='nav-item'>Home</NavLink></li>
                    <li><NavLink to="/about" className='nav-item'>About</NavLink></li>
                    <li><NavLink to="/portfolio" className='nav-item'>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className='nav-item'>Contact</NavLink></li>
                </ul>
            </animated.div>
        </nav>
    )
}

export default Nav