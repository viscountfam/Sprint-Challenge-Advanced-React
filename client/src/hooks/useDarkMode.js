
import {useState, useEffect} from 'react'
export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState()
    useEffect(() => {
            document.body.classList.toggle("dark-mode")
        }, [darkMode]);

        return [darkMode, setDarkMode]
}