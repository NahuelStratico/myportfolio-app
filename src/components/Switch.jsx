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
        const theme = localStorage.setItem('theme', JSON.stringify(darkMode))
    }
    return(
        <>
            {
                themeStorage ? <IoSunny onClick={handleTheme} className='icon-theme'/>
                :
                <IoMoon onClick={handleTheme} className='icon-theme'/>
            }
        </>
    )
}

export default Switch;