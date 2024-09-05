import React , { useEffect, useState, useRef } from 'react'
import { Bars3Icon } from "@heroicons/react/24/outline"
import ToggleTheme from "./ToggleTheme"
import { GoPeople, GoProjectRoadmap, GoProjectSymlink, GoMortarBoard, GoHubot, GoCrossReference, GoTools } from 'react-icons/go'
import { IconContext } from 'react-icons'


const Header = () => {

    // useState Hook for track if the navbar is open
    const [isOpen, setIsOpen] = useState(false)
    // useState Hook for track when to stick the header component
    const [isStick, setIsStick] = useState(true)

    const navRef = useRef();
    const iconRef = useRef();

    const navItems = [
        {href: '#whoami', content: 'Who am I?', icon: <GoProjectRoadmap />},
        {href: '#education', content: 'Education', icon: <GoMortarBoard />},
        {href: '#myskilss', content: 'My Skills', icon: <GoHubot />},
        {href: '#portfolio', content: 'Portfolio', icon: <GoCrossReference />},
        {href: '#projects', content: 'Projects', icon: <GoProjectSymlink />},
        {href: '#jobs', content: 'Jobs Experience', icon: <GoTools />},
    ]

    // useEffect Hook to close the navbar
    useEffect(()=>{
        // event listener function to close the navbar
        const closeNav = (e) => {
            // close the navbar if is cliked outside
            // its necessary to check if the click was nor in navbar nor in the icon
            // if the click is in the icon or in the navbar, theses elements already have event handler
            // then this function will do nothing
            if(!navRef.current.contains(e.target) && !iconRef.current.contains(e.target)){
                setIsOpen(false)
            }
        }
        // ensure to add event listener to the document only in the case
        // that the navbar is open
        if (isOpen){
            document.addEventListener('mousedown', closeNav)
        }

        return () => document.removeEventListener('mousedown', closeNav)

    },[isOpen])

    // useEffect Hook for adds a scroll event listener that updates isSticky based
    // on the scroll position
    // its unused but I left the code here in case i wanted to use again in the future
    useEffect(()=>{
        const handleScroll = () => {
            setIsStick(true)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return(
        <>
        <header 
            className={`${isStick ? 'fixed top-0 right-0 z-50' : 'relative'}
                
        `}>
            <div
                ref={iconRef}
                onClick={() => setIsOpen(!isOpen)}
                className="block cursor-pointer p-[3px]
                border border-gray-300 rounded-md
                hover:scale-105 
                lg:hidden
                dark:border dark:border-pkGray-border-dark
                dark:hover:bg-gray-900
            ">
                <Bars3Icon 
                    className='h-5
                '/>
            </div>
            <nav 
                className={`block
                    ${
                        isOpen ? 
                        'opacity-100 max-h-full overflow-visible' : 
                        'opacity-0 max-h-0 overflow-hidden'
                    }
                    duration-700 ease-in-out
                    lg:flex lg:self-end lg:opacity-100 lg:max-h-full lg:overflow-visible                    
            `}>
                <ul
                    ref={navRef} 
                    className="bg-pkBgSecond
                    flex flex-col gap-4
                    absolute left-0 top-full -mt-4
                    pl-4 py-8 w-[190px]
                    sm:w-[250px] sm:pl-8
                    lg:relative lg:w-auto lg:flex-row lg:gap-10 lg:py-2
                    dark:bg-pkBgDarkFirst
                ">
                    {navItems.map((item, index)=>(
                        <li 
                            key={index}
                            onClick={()=>setIsOpen(false)}
                            
                        >
                            <a 
                                href={item.href}
                                className='h-full flex items-center gap-2
                                mt-2
                                md:pb-3
                                md:duration-150
                                border-b-[2px] border-transparent rounded-sm
                                hover:border-b-pkBlue
                                dark:hover:border-b-3 dark:hover:rounded-sm dark:hover:border-b-pkOrange'
                            >
                                <IconContext.Provider
                                    value={{
                                        style: {
                                            fontSize: '17px'
                                        },
                                        className: `dark:text-pkGray-200`
                                    }}
                                >
                                    <div>
                                        {item.icon}
                                    </div>
                                </IconContext.Provider>
                                {item.content}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <ToggleTheme />
        </header>
        </>
    )
}

export default Header