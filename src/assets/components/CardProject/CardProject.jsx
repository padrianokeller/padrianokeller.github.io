import React , { useEffect, useState } from 'react'

const CardProject = ({ title, text, link }) => {

    return(
        <div 
            className='p-6 min-w-[270px] max-w-[270px]
                flex flex-col
                border rounded-lg border-pkGray-border-light
                dark:border-pkGray-border-dark
        '>
            <h4 className='text-xl mb-6 pl-2 font-bold'>{title}</h4>
            <span className='text-xs font-light'>{text}</span>
            <a
                href={link}
                target='_blank'
                className='text-center text-sm  font-light
                w-24 mt-6 p-1
                cursor-default
                rounded-md border border-pkGray-border-light
                hover:bg-pkBgFirst
                dark:border-pkGray-border-dark
                dark:bg-pkBgDarkThird
                dark:hover:bg-pkBgDarkFirst
            '>
                See more</a>
        </div>
    )

}

export default CardProject