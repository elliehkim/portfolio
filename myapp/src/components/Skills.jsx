import React from 'react'

import aws from '../assets/aws.png'
import azure from '../assets/azure.png'
import github from '../assets/github.png'
import cpp from '../assets/c++.png'
import linux from '../assets/linux.png'
import mongo from '../assets/mongo.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'


function Skills() {
  return (
    <div name='skills' className='w-full sm:h-screen pb-9'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#d18a8d] text-[#595758]'>Skills</p>
                <p className='py-4 text-lg'> These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={python} alt='python' />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={cpp} alt='cpp' />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={react} alt='react' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={linux} alt='linux' />
                    <p className='my-4'>Linux</p>
                </div>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={github} alt='github' />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={sql} alt='sql' />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={mongo} alt='mongo' />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#595758] hover:scale-110 duration-500 py-2'>
                    <img className='w-20 mx-auto' src={aws} alt='aws' />
                    <p className='my-4'>AWS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills