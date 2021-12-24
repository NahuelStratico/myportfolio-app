import { useParams, Link } from 'react-router-dom'
// import { portfolio } from '../components/ArrayList'
// import { IoClose } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5'
import Button from '../components/styled';
import '../components/modal/modal.css'

const Proyect = ({data}) => {

    const { id } = useParams()

    return(
        <>  
            {
                data.filter(item => item.id === JSON.parse(id))
                .map((item, index) => (
                    <div key={index} className='portfolio-popup'>
                        <div className='pp-inner'>
                            <div className='pp-content'>
                                <div className='pp-header'>
                                    <Link to="/portfolio">
                                        <Button className='btn'>
                                            <IoArrowBack className='pp-close' />
                                        </Button>
                                    </Link>
                                    <div className="pp-thumbnail">
                                        <img src={item.img} alt={item.alt} />
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="pp-body">
                                    <div className="description">
                                            <p>{item.description}</p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>Created - <span>{item.date}</span> </li>
                                            <li>technology used - <span>{item.technology}</span> </li>
                                            <li>Role - <span>{item.role}</span> </li>
                                            <li>View Online - <span><a href="#" target="_blank">{item.domain}</a></span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                ))
            }   
        </>
        )
    }
                    
                   
                
           
        
    


export default Proyect