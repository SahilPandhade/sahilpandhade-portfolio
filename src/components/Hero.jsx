import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles as st } from '../styles'
import styles from '../index.css'
import { ComputersCanvas } from './canvas'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  // const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "नमस्ते"]
  // const [index, setIndex] = useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     const greetingElement = document.querySelector('.greeting-text');
  //     greetingElement.classList.add('animate-fade-out');

  //     setTimeout(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  //       greetingElement.classList.remove('animate-fade-out');
  //       greetingElement.classList.add('animate-fade-in');
  //     }, 5000);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${st.paddingX}  absolute inset-0 max-w-4xl  mx-auto flex items-center gap-5 `}>
        <div className={`flex flex-col p-12 w-full `}>
          {/* <span className={`${st.heroGreeting} text-[#F8F8F9] flex justify-center opacity-0 greeting-text animate-fade-in `}>
             {greetings[index]}
            Hi
          </span> */}
          <div className={`${st.heroHeadText} flex items-center justify-center w-full text-[#F8F8F9]  animate-fade-in `}>
            Hi, I'm Sahil Pandhade
          </div>
          <div className={`${st.heroSubText} gap-2 mt-8 w-full flex justify-center text-[#F8F8F9]`}>
            <span className=''>
                Welcome to my portfolio, a window into my
              <Typewriter
                options={{
                  strings: ['education', 'experience',`work ${`\u2728`}`],
                  autoStart: true,
                  loop: true,
                  delay:100
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