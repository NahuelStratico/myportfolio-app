import { IoClose } from 'react-icons/io5';
import Button from '../styled'
import './modal.css'

const Modal = ({isOpen, close, portfolio}) => {

    const [{id, img, alt, title, description, date, technology, role, domain}] = portfolio


    return(
        <div className={`portfolio-popup ${isOpen && 'open'}`} id={id}>
            <div className='pp-inner'>
                <div className='pp-content'>
                    <div className='pp-header'>
                        <Button 
                        className='btn pp-close'
                        onClick={close}
                        >
                            <IoClose />
                        </Button>
                        <div className="pp-thumbnail">
                            <img src='https://picsum.photos/1200/400' alt="" />
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

export default Modal