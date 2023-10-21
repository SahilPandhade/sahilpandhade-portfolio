import React from 'react'
import { motion } from 'framer-motion'
import { styles as st } from '../styles'
import { technologies } from '../constants'
import { fadeIn, fadeCardIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import styles from '../index/css'
const SkillCard = ({ index, name, icon }) => {
    return (
        <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-[20px]  xl:w-1/5 w-[250px] relative overflow-hidden shadow-2xl group'>
            <motion.div variants={fadeCardIn("right", "spring", 0.5 * index, 0.75)}
                className='w-full p-[1px] shadow-card 
                 bg-tertiary rounded-[20px] flex justify-evenly items-center flex-col card'>
                    <img src={icon} alt={name} className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
            </motion.div>
        </div>
    )
}
const Skills = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={st.sectionHeadText}>My Skillset</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                Technologies I am familiar with...
            </motion.p>
            <div className='mt-20 flex justify-center flex-wrap gap-10'>
                {technologies.map((tech, index) => (
                    <SkillCard key={tech.name} index={index} {...tech} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Skills, "about");