import React , { useEffect, useState } from 'react'
import { GoCommandPalette, GoTriangleDown, GoDatabase, GoZap, GoPeople, GoPackageDependents, GoGraph } from "react-icons/go"
import SkillsAccordion from '../SkillsAccordion/SkillsAccordion'


const Skills = () => {

    // useState Hook for handle open/close accordions
    const [coding, setCoding] = useState(false)
    const [dataScience, setDataScience] = useState(false)
    const [processImprovement, setProcessImprovement] = useState(false)
    const [costAnalysis, setCostAnalysis] = useState(false)
    const [electricalEngineering, setElectricalEngineering] = useState(false)
    const [softSkills, setSoftSkills] = useState(false)


    return(
        <div className='px-4'>
            <SkillsAccordion 
                title='Coding'
                isFirst={true}
                skills={['python','numpy', 'pandas', 'flask', 'plotly', 'streamlit',
                    'javascript', 'node', 'react', 'tailwind'
            ]}>
                <GoCommandPalette />
            </SkillsAccordion>
            <SkillsAccordion
                title='Data Science'
                skills={['sql', 'data analysis', 'data literacy', 'data visualization',
                    'linear regression', 'monte carlo simulation', 'prompt engineering'
            ]}>
                <GoDatabase />
            </SkillsAccordion>
            <SkillsAccordion
                title='Process Improvement'
                skills={['scrum', 'kaizen', 'kanban', 'just-in-time', 'lean manufacturing', 'lean six sigma',
                    'business process reengineering', 'tqm', 'toc', 'value stream mapping'
            ]}>
                <GoPackageDependents />
            </SkillsAccordion>
            <SkillsAccordion
                title='Cost Analysis'
                skills={['value analysis', 'cost-benefits analysis', 'zero based budgeting',
                    'benchmarking', 'supply chain management', 'pareto analysis', 'activity based costing',
                    'sensitivity analysis and simulation'
            ]}>
                <GoGraph />
            </SkillsAccordion>
            <SkillsAccordion
                title='Electrical Engineering'
                skills={['energy efficiency', 'solar energy', 'public lighting'

            ]}>
                <GoZap />
            </SkillsAccordion>
            <SkillsAccordion
                isLast={true}
                title='Soft Skills'
                skills={['agile mindset', 'active listening', 'clear communication', 'public speaking', 
                    'written communication', 'empathy', 'teamwork', 'leadership', 'conflict resolution',
                    'flexibility', 'problem-solving', 'critical thinking', 'self-awareness',
                    'self-regulation', 'emotional inteligence', 'relationship management'
            ]}>
                <GoPeople />
            </SkillsAccordion>
        </div>
    )

}

export default Skills