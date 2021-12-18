import {experience} from './ArrayList'
import '../pages/styles/home.css'
import '../pages/styles/about.css'

const Experience = () => {
    return(
        <div className='tab-content'>
        {
            experience.map((item, index) => (
                <div key={index}>
                    <div className="timeline" >
                        <div className="timeline-item">
                            <span className='date'>{item.date}</span>
                            <h4>{item.role} - <span>{item.company}</span> </h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default Experience