import { portfolio } from '../components/ArrayList'
import Button from '../components/styled'
import './styles/home.css'
import './styles/about.css'
import './styles/portfolio.css'

const Portfolio = () => {
    return(
        <section className="portfolio-section sec-padding">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>recent work</h2>
                    </div>
                </div>
                <div className="row">
                    {/* Portfolio Item Start */}
                   
                        {
                            portfolio.map((item, index) => (
                                <div className="portfolio-item">
                                    <div className="portfolio-item-thumbnail" key={index}>
                                        <img src={item.img} alt={item.alt} />
                                    </div>
                                    <h3 className='portfolio-item-title'>{item.title}</h3>
                                    <Button>view proyect</Button>
                                </div>
                            ))
                        }
                        {/* <div className="portfolio-item-thumbnail">
                            <img src="https://picsum.photos/500" alt="portfolio item thumb" />
                        </div>
                        <h3 className='portfolio-item-title'>education course website</h3>
                        <button className='btn view-proyect-btn'>view proyect</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>Created - <span>4 Dec 2020</span> </li>
                                    <li>technology used - <span>Html, css</span> </li>
                                    <li>Role - <span>Frontend</span> </li>
                                    <li>View Online - <span><a href="#" target="_blank">www.domain.com</a></span> </li>
                                </ul>
                            </div>
                        </div> */}
    
                </div>
            </div>
        </section>
    )
}

export default Portfolio