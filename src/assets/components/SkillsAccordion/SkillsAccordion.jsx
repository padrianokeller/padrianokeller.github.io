import React , { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { GoTriangleDown } from 'react-icons/go'


const SkillsAccordion = ({ children, isFirst, isLast, skills, title }) => {

    //useState
    const [isOpen, setIsOpen] = useState(false)

    //useEffect
    useEffect(()=>{

    },[])

    return(
        <>
        <h4>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`skills-accordion-button 
                    ${isFirst ? 'rounded-t-xl' : ''}
                    ${isLast ? (isOpen ? 'border-b-0' : 'border-b rounded-b-xl') : ''}
                    ${isOpen ? 'dark:bg-pkBgDarkThird dark:hover:bg-pkBgDarkSecond' : 'dark:hover:bg-pkBgDarkThird'}
                `}
            >
                <div className='flex items-center'>
                    <IconContext.Provider
                        value={{
                            style: {
                                fontSize: '17px'
                            },
                            className: `dark:text-pkGray-200 ${isOpen ? 'dark:text-pkOrange' : ''}`
                        }}
                    >
                        <div className='mx-2'>
                            {children}
                        </div>
                    </IconContext.Provider>
                    <span className={`${isOpen ? 'dark:text-pkOrange' : ''}`}>{title}</span>
                </div>
                <IconContext.Provider
                    value={{
                        style: {
                            fontSize: '17px'
                        },
                        className: `dark:text-pkGray-200 ${isOpen ? 'dark:text-pkOrange' : ''}`
                    }}
                >
                    <div className={`mx-2 duration-700 ${isOpen ? 'rotate-[540deg]' : ''}`}
                    >
                        <GoTriangleDown  />
                    </div>
                </IconContext.Provider>
            </button>
        </h4>
        <div className={`grid overflow-hidden
            ${isOpen 
                ? 'grid-rows-[1fr] opacity-100 max-h-full overflow-visible' 
                : 'grid-rows-[0fr] opacity-0 max-h-0 overflow-hidden'
            }
        `}>
            <div 
                className={`skills-accordion-body ${isLast ? 'border-b rounded-b-xl' : ''}`}
            >
                <ul className='skills-list'>{
                    skills.map((skill, index)=>(
                        <li key={index}>{skill}</li>
                    ))
                }</ul>
            </div>
        </div>
        </>
    )

}

export default SkillsAccordion