import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'
import { IoMoon, IoSunny } from "react-icons/io5";
import './switch.css'

const Switch = () => {
    const { handleTheme, theme } = useContext(ThemeContext);
   
    return(
        <div className='switch'>
            {
                theme ? <IoSunny onClick={handleTheme} className='icon-theme-sun'/>
                :
                <IoMoon onClick={handleTheme} className='icon-theme-moon'/>
            }
        </div>
    )
}

export default Switch;