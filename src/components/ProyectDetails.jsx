import { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { portfolio } from './ArrayList'
import Button from '../components/styled'
import '../pages/styles/portfolio.css'



const ProyectDetails = () => {

    const {id, img, alt, title, description, date, technology, role, domain} = portfolio
    const [ close, setClose ] = useState(false)

    const closeModal = () => {
        setClose(true)
    }

    return(
        <div className='portfolio-popup'>
            <div className='pp-inner'>
                <div className='pp-content' key={id}>
                    <div className='pp-header'>
                        <Button 
                        className='btn pp-close'
                        onClick={closeModal}
                        >
                            <IoClose />
                        </Button>
                        <div className="pp-thumbnail">
                            <img src={img} alt={alt} />
                        </div>
                        <h3>{title}</h3>
                    </div>
                    <div className="pp-body">
                        <div className="description">
                            <p>{description}</p>
                        </div>
                        <div className="general-info">
                            <ul>
                                <li>Created - <span>{date}</span> </li>
                                <li>technology used - <span>{technology}</span> </li>
                                <li>Role - <span>{role}</span> </li>
                                <li>View Online - <span><a href="#" target="_blank">{domain}</a></span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ProyectDetails