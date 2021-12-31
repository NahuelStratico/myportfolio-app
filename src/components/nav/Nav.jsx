import { Link, NavLink } from 'react-router-dom'
import '../../pages/styles/home.css'
import './nav.css'

const Nav = () => {
    return(
        <nav className="nav">
            <div className="nav-inner">
                <ul>
                    <li><NavLink to="/" className='nav-item'>Home</NavLink></li>
                    <li><NavLink to="/about" className='nav-item'>About</NavLink></li>
                    <li><NavLink to="/portfolio" className='nav-item'>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className='nav-item'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav