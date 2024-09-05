import React , { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { BsGithub, BsGitlab, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { GoBriefcase, GoClock, GoLocation, GoPerson, GoGlobe } from 'react-icons/go'


const Profile = () => {

    // useState Hook to store age state
    const [myAge, setMyAge] = useState(0)
    // useState Hook to store the brazil UTC time
    const [myTime, setMyTime] = useState('')

    // useEffect Hook for display updated brazil UTC time and my age
    useEffect(()=>{

        //function to display my brazil time
        const brazilTime = () => {
            const now = new Date()
            const hour = now.getUTCHours() - 3
            const min = now.getUTCMinutes()

            let amPm = ''
            let hourStr = ''
            let minStr = ''

            hour < 12 ? amPm = 'am' : amPm = 'pm'
            hour < 10 ? hourStr = `0${hour}` : hour < 12 ? hourStr = `${hour}` : hourStr = `${hour - 12}`
            min < 10 ? minStr = `0${min}` : minStr = `${min}`

            return `${hourStr}:${minStr} ${amPm}`
        }

        //function to update my age automatically
        const deltaYear = () => {
            const birthDate = new Date('1990-03-09:')
            const today = new Date()
            const deltaTime = today.getTime() - birthDate.getTime()
            const deltaYears = Math.floor(deltaTime/(1000*3600*24*365.25))
            return deltaYears
        }
        setMyAge(deltaYear())
        setMyTime(brazilTime())
    }, [])

    return(
        <>
        <aside>
            <img 
                src="./img/me3.jpg" 
                alt="Profile image" 
                className='w-4/5 max-w-[290px] rounded-full
                    border-2 border-pkGray-border-light
                    sm:w-[320px]
                    dark:border-2 dark:border-pkGray-border-dark
            '/>
            <div 
                className='flex flex-col gap-3'>
                <h2 
                    className='text-xl font-bold
                    my-3
                    sm:text-2xl
                    md:self-start 
                '>
                    Paulo Adriano Keller
                </h2>
                <div className='text-sm
                    flex flex-col gap-1
                    sm:text-base
                '>
                    <p>
                        Automation & Electrical Engineer, with a focus on renewable energy projects.
                    </p>
                    <p>
                        Expertise on data-driven optimization for Industry.
                    </p>
                    <p>
                        Passionate about leveraging technology to enhance operational efficiency.
                    </p>
                    <p>
                        Enthusiastic developer exploring automation and data science solutions in free time.
                    </p>
                </div>
                <div 
                    className='text-sm flex flex-col gap-1
                    sm:text-base
                    lg:mt-2
                '>
                    <span className='flex flex-row items-center'>
                        <IconContext.Provider
                            value={{
                                style: {
                                    fontSize: '16px',
                                    strokeWidth: '.6px'
                                },
                                className: 'mr-2 dark:text-pkGray-200'
                            }}
                        >
                            <div>
                                <GoBriefcase />
                            </div>
                        </IconContext.Provider>
                        Automation & Electrical Engineer
                    </span>
                    <span className='flex flex-row items-center'>
                        <IconContext.Provider
                            value={{
                                style: {
                                    fontSize: '16px',
                                    strokeWidth: '.6px'
                                },
                                className: 'mr-2 dark:text-pkGray-200'
                            }}
                        >
                            <div>
                                <GoLocation />
                            </div>
                        </IconContext.Provider>
                        Brazil, Água Boa - MT
                    </span>
                    <span className='flex flex-row items-center'>
                        <IconContext.Provider
                            value={{
                                style: {
                                    fontSize: '16px',
                                    strokeWidth: '.6px'
                                },
                                className: 'mr-2 dark:text-pkGray-200'
                            }}
                        >
                            <div>
                                <GoGlobe />
                            </div>
                        </IconContext.Provider>
                        En-US, Pt-BR
                    </span>
                    <span className='flex flex-row items-center'>
                        <IconContext.Provider
                            value={{
                                style: {
                                    fontSize: '16px',
                                    strokeWidth: '.6px'
                                },
                                className: 'mr-2 dark:text-pkGray-200'
                            }}
                        >
                            <div>
                                <GoClock />
                            </div>
                        </IconContext.Provider>
                        {myTime}
                        <span className='text-pkGray-200 ml-2'>(UTC -03:00)</span>
                    </span>
                    <span className='flex flex-row items-center'>
                        <IconContext.Provider
                            value={{
                                style: {
                                    fontSize: '16px',
                                    strokeWidth: '.6px'
                                },
                                className: 'mr-2 dark:text-pkGray-200'
                            }}
                        >
                            <div>
                                <GoPerson />
                            </div>
                        </IconContext.Provider>
                        {myAge} years
                    </span>
                </div>
                <div className='mt-4 px-7 flex justify-between'>
                    <IconContext.Provider
                        value={{
                            style: {
                                fontSize: '24px'
                            },
                            className: 'hover:text-pkBlue dark:hover:text-pkBlue dark:text-pkGray-200'
                        }}
                    >
                        <div 
                            className='p-[6px]
                                rounded-md
                                hover:scale-105 hover:bg-pkBgFirst
                                dark:hover:bg-pkBgDarkFirst
                        '>
                            <a href="https://github.com/padrianokeller" target='_blank'>
                                <BsGithub />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                        value={{
                            style: {
                                fontSize: '24px'
                            },
                            className: 'hover:text-pkBlue dark:hover:text-pkBlue dark:text-pkGray-200'
                        }}
                    >
                        <div 
                            className='p-[6px]
                                rounded-md
                                hover:scale-105 hover:bg-pkBgFirst
                                dark:hover:bg-pkBgDarkFirst
                        '>
                            <a href="https://gitlab.com/pauloadrianokeller" target="_blank">
                                <BsGitlab />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                        value={{
                            style: {
                                fontSize: '24px'
                            },
                            className: 'hover:text-pkBlue dark:hover:text-pkBlue dark:text-pkGray-200'
                        }}
                    >
                        <div 
                            className='p-[6px]
                                rounded-md
                                hover:scale-105 hover:bg-pkBgFirst
                                dark:hover:bg-pkBgDarkFirst
                        '>
                            <a href="https://www.linkedin.com/in/pauloadrianokeller/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                        value={{
                            style: {
                                fontSize: '24px'
                            },
                            className: 'hover:text-pkBlue dark:hover:text-pkBlue dark:text-pkGray-200'
                        }}
                    >
                        <div 
                            className='p-[6px]
                                rounded-md
                                hover:scale-105 hover:bg-pkBgFirst
                                dark:hover:bg-pkBgDarkFirst
                        '>
                            <a href="https://www.instagram.com/padrianokeller/" target="_blank">
                                <BsInstagram />
                            </a>
                        </div>
                    </IconContext.Provider>
                    
                </div>
            </div>
        </aside>
        </>
    )

}

export default Profile