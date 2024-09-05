import { useEffect, useState } from 'react'
import { MoonIcon } from "@heroicons/react/24/solid"
import { SunIcon } from "@heroicons/react/24/solid"

const ToggleTheme = () =>{

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <div className="block cursor-pointer p-[3px]
                border border-pkGray-border-light rounded-md
                hover:scale-105 
                md:hover:bg-gray-100
                dark:border dark:border-pkGray-border-dark
                dark:hover:bg-pkBgDarkSecond
        ">
            <MoonIcon 
                className="h-5 text-black
                    lg:h-6
                    hover:text-pkBlue
                    dark:hidden" 
                onClick={toggleTheme} />
            <SunIcon 
                className="h-5 text-pkWhite hidden
                    lg:h-6
                    dark:block
                    dark:hover:text-pkOrange" 
                onClick={toggleTheme} />
        </div>
    )

}

export default ToggleTheme