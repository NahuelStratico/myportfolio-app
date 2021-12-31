// import Nav from '../nav/Nav'
import './header.css'

const Header = ({setActiveNav, activeNav}) => {

    const handleNAv = () => {
        setActiveNav(!activeNav)
    }
    
    return(
        <header className="header">
            <div className="container">
                <div className="row flex-end">
                    <button 
                        type="button" 
                        className="nav-toggler"
                        onClick={handleNAv}
                        >
                        <span></span>
                    </button>
                    {/* <Nav /> */}
                </div>
            </div>
        </header>
    )
}

export default Header