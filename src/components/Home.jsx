import React from 'react'
import profile from '../assets/profile.jpg'
import { Link } from 'react-scroll'


function Home() {
  return (
    <div name='home' className='w-full h-screen pt-20 mb-20 '>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-[100%]'>
            <div className='px-8 m-5'>
            <img src={profile} className='profile-pic'></img>
            </div>
            <div className='m-7'>
            <p className='text-lg'>Hi, My name is</p>
            <h1 className='text-4xl md:text-7xl font-bold text-[#595758] mt-2'>Ellie Kim</h1>
            <h2 className='text-2xl md:text-3xl font-bold mt-2 text-[#d18a8d]'>I'm a software development graduate</h2>
            <div className='mt-8'>
                <button className='button' >
                  <Link to='projects' smooth={true} duration={500}>
                  View Projects
                  </Link>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home