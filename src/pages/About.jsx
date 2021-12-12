import { useState } from 'react'
import image from '../img/nahuel.png'
import './styles/home.css'
import './styles/about.css'

const About = () =>{

    const [ education, setEducation ] = useState(true)
    const [ experience, setExperience ] = useState(false)

    const handleClickEd = () => {
        setEducation(true)
        setExperience(false)
    }
    const handleClickEx = () => {
        setExperience(true)
        setEducation(false)
    }

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

                        <div className="about-tabs">
                            <button 
                                type="button" 
                                className={`tab-item ${education ? "active" : ""}`}
                                data-target="#education"
                                onClick={handleClickEd}
                                >
                                    education</button>
                            <button type="button" className={`tab-item ${experience ? "active" : ""}`} data-target="#experience" onClick={handleClickEx}>experience</button>
                        </div>

                        {/* --- Education */}
                        <div className={`tab-content ${education ? "active" : ""}`} id='education'>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className='date'>2013 - 2016</span>
                                    <h4>bacher of technology - <span>Todfod university</span> </h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis dolorum at dolore ab.</p>
                                </div>
                                <div className="timeline-item">
                                    <span className='date'>2013 - 2016</span>
                                    <h4>bacher of technology - <span>Todfod university</span> </h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis dolorum at dolore ab.</p>
                                </div>
                                <div className="timeline-item">
                                    <span className='date'>2013 - 2016</span>
                                    <h4>bacher of technology - <span>Todfod university</span> </h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis dolorum at dolore ab.</p>
                                </div>
                            </div>
                        </div>

                        {/* --- Experience */}
                        <div className={`tab-content ${experience ? "active" : ""}`} id='experience'>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className='date'>2013 - 2016</span>
                                    <h4>web developer - <span>this company</span></h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis dolorum at dolore ab.</p>
                                </div>
                                <div className="timeline-item">
                                    <span className='date'>2013 - 2016</span>
                                    <h4>web developer - <span>this company</span></h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis dolorum at dolore ab.</p>
                                </div>
                                <div className="timeline-item">
                                    <span className='date'>2013 - 2016</span>
                                    <h4>web developer - <span>this company</span></h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis dolorum at dolore ab.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#" className='btn'>download cv</a>
                        <a href="#" className='btn'>contact me</a>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default About