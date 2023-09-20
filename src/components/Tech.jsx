import React from 'react'
import { technologies } from '../constants'
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech Stack I work with</p>
        <p className={styles.sectionHeadText}>Skillset</p>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");