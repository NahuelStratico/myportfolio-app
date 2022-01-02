// import Nav from '../nav/Nav'
import './header.css'

const Header = ({setActiveNav, activeNav}) => {

    const handleNAv = () => {
        setActiveNav(!activeNav)
    }
    
    return(
        <header className={`header ${activeNav ? 'active' : ''} `}>
            <div className="container">
                <div className="row flex-end">
                    <button 
                        type="button" 
                        className="nav-toggler"
                        onClick={handleNAv}
                        >
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header