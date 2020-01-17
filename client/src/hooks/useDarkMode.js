
import {useState, useEffect} from 'react'
export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState()
    useEffect(() => {
        if(darkMode === true) { 
            document.body.classList.add("dark-mode")
        } if(darkMode === false) {
            document.body.classList.remove("dark-mode-card")
        }
        }, [darkMode]);

        return [darkMode, setDarkMode]
}