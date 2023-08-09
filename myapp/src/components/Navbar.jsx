import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 z-10 bg-[#595758] text-white'>
        <div>
            <ul className='hidden sm:flex text-md'>
                <li className='hover:text-[#d18a8d]'>
                    <Link to='home' smooth={true} duration={500}>
                    HOME
                    </Link>
                </li>
                <li className='hover:text-[#d18a8d]'>
                    <Link to='about' smooth={true} duration={500}>
                    ABOUT
                    </Link>
                </li>
                <li className='hover:text-[#d18a8d]'>
                    <Link to='skills' smooth={true} duration={500}>
                    SKILLS
                    </Link>
                </li>
                <li className='hover:text-[#d18a8d]'>
                    <Link to='projects' smooth={true} duration={500}>
                    PROJECTS
                    </Link>
                </li>
                {/* <li className='hover:text-[#ee6c4d]'>
                    <Link to='contact' smooth={true} duration={500}>
                    CONTACT
                    </Link>
                </li> */}
            </ul>
        </div>

        {/* hamburger */}
        <div onClick={handleClick} className='sm:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#595758] flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    HOME
                </Link>
            </li>
            <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    ABOUT
                </Link>
            </li>
            <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    SKILLS
                </Link>
            </li>
            <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                    PROJECTS
                </Link>
            </li>
            {/* <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    CONTACT
                </Link>
            </li> */}
        </ul>

        {/* Social Media */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between item-center w-full' href='https://www.linkedin.com/in/ellie-hyein-kim-2b85b8213/'>
                    LinkedIn <FaLinkedinIn size={30}/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between item-center w-full' href='https://github.com/elliehkim'>
                    Github <FaGithub size={30}/>
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F0F8FF]'>
                <a className='flex justify-between item-center w-full text-gray-700' href='mailto:ellie93kim@gmail.com'>
                    Mail <HiOutlineMail size={30}/>
                </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar