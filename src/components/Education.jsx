import {education} from './ArrayList'
import '../pages/styles/home.css'
import '../pages/styles/about.css'


const Education = () => {
    return(
        <div className='tab-content'>
            {
                education.map((item, index) => (
                    <div key={index}>
                        <div className="timeline" >
                            <div className="timeline-item">
                                <span className='date'>{item.date}</span>
                                <h4>{item.course} - <span>{item.institute}</span> </h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Education