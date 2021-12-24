import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/styled'
import { portfolio } from '../components/ArrayList'

const Proyects = ({openModal, data}) => {


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
                    {/* <Button
                        onClick={openModal}
                    >view proyect</Button> */}
                </div>
            ))
        
    )
}

export default Proyects