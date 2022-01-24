import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { IoMoon, IoSunny } from "react-icons/io5";
import './switch.css'

//IoMoonOutline
//IoMoon
//IoSunnyOutline
//IoSunny

const Switch = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const themeStorage = JSON.parse(localStorage.getItem('theme'));

    const handleTheme = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('theme', JSON.stringify(darkMode))
    }
    return(
        <div className='switch'>
            {
                themeStorage ? <IoSunny onClick={handleTheme} className='icon-theme-sun'/>
                :
                <IoMoon onClick={handleTheme} className='icon-theme-moon'/>
            }
        </div>
    )
}

export default Switch;