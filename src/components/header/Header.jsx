import Nav from '../nav/Nav'
import './header.css'

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="row flex-end">
                    <button type="button" className="nav-toggler">
                        <span></span>
                    </button>
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header