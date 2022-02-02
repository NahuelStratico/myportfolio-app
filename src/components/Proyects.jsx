import { useContext } from 'react'
import { Link } from 'react-router-dom';
import ThemeContext from './Context/ThemeContext';
import '../pages/styles/home.css'


const Proyects = ({data}) => {

    const { theme } = useContext(ThemeContext)

    return(
            data.map((item, index) => (
                <div className="portfolio-item" key={index}>
                    <div className="portfolio-item-thumbnail" >
                        <img src={item.img} alt={item.alt} />
                    </div>
                    <h3 className='portfolio-item-title'>{item.title}</h3>
                    <Link to={`/proyect/${item.id}`} className={ theme ? 'btn dark' : 'btn'}>
                       View more
                    </Link>
                </div>
            ))
        
    )
}

export default Proyects