// import Nav from '../nav/Nav'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import './header.css'

const Header = ({setActiveNav, activeNav}) => {

    const { darkMode } = useContext(ThemeContext)

    const handleNAv = () => {
        setActiveNav(!activeNav)
    }
    
    return(
        <header className={`header ${activeNav ? 'active' : ''} `}>
            <div className="container">
                <div className="row flex-end">
                    <button 
                        type="button" 
                        className={ darkMode ? 'nav-toggler dark': "nav-toggler"}
                        onClick={handleNAv}
                        >
                        <span className={ darkMode ? 'span dark': 'span'}></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header