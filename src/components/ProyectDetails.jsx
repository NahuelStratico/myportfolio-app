// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { portfolio } from './ArrayList'
// import Button from '../components/styled'
// import '../pages/styles/home.css'
// import '../pages/styles/portfolio.css'



// const ProyectDetails = () => {

//     const {id, img, alt, title, description, date, technology, role, domain, pathname} = portfolio

//     return(
//         <div className='portfolio-popup'>
//             <div className='pp-inner'>
//                 <div className='pp-content' key={id}>
//                     <div className='pp-header'>
//                         <div className="pp-thumbnail">
//                             <img src={img} alt={alt} />
//                         </div>
//                         <h3>{title}</h3>
//                     </div>
//                     <div className="pp-body">
//                         <div className="description">
//                             <p>{description}</p>
//                         </div>
//                         <div className="general-info">
//                             <ul>
//                                 <li>Created - <span>{date}</span> </li>
//                                 <li>technology used - <span>{technology}</span> </li>
//                                 <li>Role - <span>{role}</span> </li>
                                    
//                                 <li>View Online - 
//                                         <span>
//                                             {/* <Link to={{ pathname: "https://www.giargiaconstrucciones.com.ar/" }} target='_blank'>
//                                                 {domain}
//                                             </Link> */}
//                                             <a href="https://www.giargiaconstrucciones.com.ar/" target="_blank">{domain}</a>
//                                             {/* <a href={portfolio.pathname} target="_blank">{domain}</a> */}
//                                         </span> 
//                                 </li>
                                    
//                             </ul>
//                             <a href="https://www.giargiaconstrucciones.com.ar/" target='_blank'>ir ahi</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>            
//         </div>
//     )
// }

// export default ProyectDetails