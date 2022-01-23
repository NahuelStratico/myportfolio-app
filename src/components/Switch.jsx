import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Switch = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const handleTheme = () => {
        setDarkMode(!darkMode)
    }
    return(
        <button onClick={handleTheme}>ON/OFF</button>
    )
}

export default Switch;