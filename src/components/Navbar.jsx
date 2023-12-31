import { React, useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom';
import { logo, menu, close, Sahil_Pandhade_Resume } from '../assets'
import { styles } from '../styles';
import { list } from 'postcss';
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className="flex items-center gap-1" onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={logo} alt='logo' className='w-12 h-12 object-contain rounded-3xl mr-5'></img>
          <p className='text-white text-[14px] font-bold cursor-pointer'>Sahil Pandhade</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
            <a href={Sahil_Pandhade_Resume} download={"Hire_Sahil_Pandhade"} target='_blank' rel='noopener noreferrer'
             className="btn-flip bg-tertiary px-4 rounded-md opacity-100 outline-none text-white
              leading-10 relative text-center tracking-wider inline-block no-underline font-open-sans uppercase" 
             data-back="Download CV" data-front="Know more"></a>
          {
            navLinks.map((link) => (
              <li key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => { setToggle(!toggle) }}></img>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <li className='text-white font-poppins font-medium cursor-pointer text-[16px]'>
                <a href={Sahil_Pandhade_Resume} download={"Hire_Sahil_Pandhade"} target='_blank' rel='noopener noreferrer'>
                  Download CV
                </a>
              </li>
              {
                navLinks.map((link) => (
                  <li key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} 
                font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar