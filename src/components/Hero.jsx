import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles as st } from '../styles'
import styles from '../index.css'
import { ComputersCanvas } from './canvas'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "नमस्ते"]
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Add fade-out class to initiate fade out animation
      const greetingElement = document.querySelector('.greeting-text');
      greetingElement.classList.add('animate-fade-out');

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % greetings.length);

        // Remove fade-out class to reset the animation
        greetingElement.classList.remove('animate-fade-out');

        // Add fade-in class to initiate fade in animation
        greetingElement.classList.add('animate-fade-in');
      }, 5000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto  '>
      <div className={`${st.paddingX} absolute inset-0 top-[240px] max-w-2xl xs:justify-center mx-auto flex flex-row items-start gap-5 `}>
        <div className={`flex flex-col  p-10 w-full  ml-10`}>
          <span className={`${st.heroSubText} text-[#F8F8F9]`}><Typewriter 
            options={
              {
                delay:120,
                deleteSpeed:90,
                strings:greetings,
                autoStart:true,
                loop:true
              }
            }/></span>
          {/* <span className={`${st.heroSubText} opacity-0 greeting-text animate-fade-in `}>{greetings[index]}</span> */}
          <span className={`${st.heroHeadText} flex items-center gap-10 w-full text-[#F8F8F9] font-croissant`}>
            I'm Sahil
          </span>
          <div className={`${st.heroSubText} flex gap-2 mt-10 w-full text-[#F8F8F9]`}>
            <p className=''>I'm a </p>
            <span >
              <Typewriter
                options={{
                  delay: 90,
                  deleteSpeed: 50,
                  strings: [' Full Stack Developer', ' Computer Engineer', ' Tech enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas/> */}
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />

          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero