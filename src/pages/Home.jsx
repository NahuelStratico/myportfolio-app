import { Link } from "react-router-dom";
import Button from '../components/styled'
import './styles/home.css'
import image from '../img/nahuel.png'

const Home = () => {
    return(
        // Main start
        <div className="main">
            {/* Home section Start */}
            <section className='home-section align-item-center'>
                <div className="container">
                    <div className="row align-item-center">
                        <div className="home-text">
                            <p>Hello, I'm</p>
                            <h1>Nahuel Stratico</h1>
                            <h2>Frontend web developer</h2>
                            {/* <Link className='btn' to="/about">More about me</Link>
                            <Link className='btn'  to="/portfolio">portfolio</Link> */}
                            <Link className='btn' to="/about"><Button>More about me</Button></Link>
                            <Link className='btn' to="/portfolio"><Button>portfolio</Button></Link>
                        </div>
                        <div className="home-img">
                            <div className="img-box">
                                <img src={image} alt="profile-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home