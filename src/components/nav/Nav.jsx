import { Link } from 'react-router-dom'
import '../../pages/styles/home.css'
import './nav.css'

const Nav = () => {
    return(
        <div className="nav">
            <div className="nav-inner">
                <ul>
                    <li><Link to="/" className='nav-item'>Home</Link></li>
                    <li><Link to="/about" className='nav-item'>About</Link></li>
                    <li><Link to="/portfolio" className='nav-item'>Portfolio</Link></li>
                    <li><Link to="/contact" className='nav-item'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav