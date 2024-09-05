import React , { useEffect, useState } from 'react'
import CardProject from './CardProject/CardProject'
import Skills from './Skills/Skills'
import UnderConstruction from './UnderConstruction/Underconstruction'

const Main = () => {

    return(
        <>
        <main>
            <article>
            <h3 id='whoami'>Who am I?</h3>
            <p className='font-light'>
                Bachelor's Degree in Control & Automation Engineering 
                and Electrical Engineering with a specialized focus on 
                energy dynamics, civil construction and urban infrastructure.
            </p>
            <p className='font-light'>
                My expertise spans civil construction to public works 
                projects, emphasizing energy efficiency, cost control 
                optimization, quality assurance, and strategic planning.
            </p>
            <p className='font-light'>
                Passionate about the intersection of engineering and data,
                I am broadening my skill set across the comprehensive spectrum 
                of Data Sciences to enhance operations in the Energy Efficiency 
                and Civil Construction sectors.
            </p>
            </article>
            <article>
                <h3 id='education'>Education</h3>
                <UnderConstruction />
            </article>
            <article>
                <h3 id='myskilss'>My Skills</h3>
                <Skills />
            </article>
            <article>
                <h3 id='portfolio'>Portfolio</h3>
                <UnderConstruction />
            </article>
            <article>
                <h3 id='projects'>Projects</h3>
                <div 
                    className='flex flex-col items-center gap-3
                        sm:flex-row sm:flex-wrap sm:justify-center
                '>
                    <CardProject 
                        title='Gerencialize' 
                        text='A Web Based SaaS to track e-invoices and manager tax and financial calculations.' 
                    />
                    <CardProject 
                        title='Diet App' 
                        text='A React Web App to track dairy diet intakes.' 
                    />
                    <CardProject 
                        title='Assets App' 
                        text='A React Web App to track investment wallets.' 
                    />
                </div>
            </article>
            <article>
                <h3 id='jobs'>Jobs Experience</h3>
                <UnderConstruction />
            </article>
        </main>
        </>
    )

}

export default Main