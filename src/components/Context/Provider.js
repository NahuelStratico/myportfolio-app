import { useState } from 'react';
import ThemeContext  from './ThemeContext';

const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);
    const theme = JSON.parse(localStorage.getItem('theme'));
    
    const handleTheme = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('theme', JSON.stringify(darkMode))
    }

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode, theme, handleTheme}}>
            {children} 
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;