import { Link, NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import '../../pages/styles/home.css'
import './nav.css'

const Nav = ({style,  setActiveNav}) => {

    const close = () =>{
        setActiveNav(false)
    }

    return(
        <nav className="nav">
            <animated.div style={style} className="nav-inner">
                <ul>
                    <li><NavLink to="/" className='nav-item' onClick={() => close()}>Home</NavLink></li>
                    <li><NavLink to="/about" className='nav-item' onClick={() => close()}>About</NavLink></li>
                    <li><NavLink to="/portfolio" className='nav-item' onClick={() => close()}>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className='nav-item' onClick={() => close()}>Contact</NavLink></li>
                </ul>
            </animated.div>
        </nav>
    )
}

export default Nav