import { Link } from 'react-router-dom'
import Button from '../components/styled'


const Proyects = ({data}) => {

    return(
            data.map((item, index) => (
                <div className="portfolio-item" key={index}>
                    <div className="portfolio-item-thumbnail" >
                        <img src={item.img} alt={item.alt} />
                    </div>
                    <h3 className='portfolio-item-title'>{item.title}</h3>
                    <Link to={`/proyect/${item.id}`}>
                       <Button>View more</Button> 
                    </Link>
                </div>
            ))
        
    )
}

export default Proyects