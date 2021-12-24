import Button from '../components/styled'
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'
import './styles/home.css'
import './styles/contact.css'

const Contact = () => {
    return(
        <div className="main">
            <section className="contact-section sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>contact me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="input-group">
                                        <input type="text" placeholder='Name' className='input-control required'/>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" placeholder='Email' className='input-control required'/>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" placeholder='Subject' className='input-control required'/>
                                    </div>
                                    <div className="input-group">
                                        <textarea placeholder='Message' className='input-control'required></textarea>
                                    </div>
                                    <div className="submit-btn">
                                        <Button>
                                            send message
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <h3>Email</h3>
                                <p>straticonahuel@gmail.com</p>
                            </div>
                            <div className="contact-info-item">
                                <h3>Phone</h3>
                                <p>11 68791292</p>
                            </div>
                            <div className="contact-info-item">
                                <h3>Follow me</h3>
                                <div className="social-links">
                                    <a href="#" target="_blank"><IoLogoGithub/></a>
                                    <a href="#" target="_blank"><IoLogoLinkedin /></a>
                                    <a href="#" target="_blank"><IoLogoInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact