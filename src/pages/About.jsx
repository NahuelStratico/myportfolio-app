import image from '../img/nahuel.png'
import './styles/home.css'
import './styles/about.css'

const About = () =>{
    return(
        <section className="about-section sec-padding">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>about me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-img">
                        <div className="img-box">
                            <img src={image} alt="about img" />
                        </div>
                    </div>
                    <div className="about-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus nemo amet officiis aliquam molestiae harum ratione veniam maxime distinctio quis minus minima quisquam expedita, reiciendis laboriosam nesciunt quos tempore esse ipsam accusantium sequi? Repudiandae quos, id dolorem, laborum vitae sed accusamus a labore nobis maxime veritatis quisquam, reiciendis illo.</p>
                        <h3>Skills</h3>
                        <div className="skills">
                            <div className="skill-item">html</div>
                            <div className="skill-item">css</div>
                            <div className="skill-item">javascript</div>
                            <div className="skill-item">bootstrap</div>
                            <div className="skill-item">react</div>
                            <div className="skill-item">figma</div>
                            <div className="skill-item">sass</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About