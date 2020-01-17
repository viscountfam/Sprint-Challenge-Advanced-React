import {useLocalStorage} from "./useLocalStorage"
import {useEffect} from 'react'
export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(darkMode, initialValue);
    useEffect(() => {
        if(darkMode === true) { 
            document.body.classList.add("dark-mode");
            document.getElementsByClassName("player-cards").classList.add("dark-mode-card")
        } else if(darkMode === false) {
            document.body.classList.remove("dark-mode")
            document.getElementsByClassName("player-cards").classList.remove("dark-mode-card")
        }
        }, [darkMode]);

        return [darkMode, setDarkMode]
}