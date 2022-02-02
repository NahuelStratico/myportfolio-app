import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import ThemeContext from '../components/Context/ThemeContext';

import './styles/portfolio.css';

const Proyect = ({data}) => {

    const { id } = useParams();
    const { theme } = useContext(ThemeContext);

    return(
        <div className={theme ? 'body dark': 'body'}>
            {
                data.filter(item => item.id === JSON.parse(id))
                .map((item, index) => (
                    <div key={index} className='portfolio-popup'>
                        <div className='pp-inner'>
                            <div className='pp-content'>
                                <div className='pp-header'>
                                    <Link to="/portfolio" className={ theme ? 'btn dark' : 'btn'}>
                                            <IoArrowBack className='pp-close' />
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
                                            <li>technology used - <span className={theme? 'technologies':''}>{item.technology}</span> </li>
                                            <li>Role - <span>{item.role}</span> </li>
                                            <li>View Online - <span><a className={theme ? 'dark':''} href={item.pathname} target="_blank">{item.domain}</a></span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                ))
            }   
        </div>
        )
    }
                    
                   
                
           
        
    


export default Proyect