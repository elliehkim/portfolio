import React from 'react'
import badge1 from '../assets/aws-badge.png'
import badge2 from '../assets/azure-badge.png'


function About() {
  return (
    <div name='about' className='w-full sm:h-screen mb-20'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#d18a8d] text-[#595758]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid gap-8 px-4 my-9'>
                <div className='text-2xl font-bold text-[#d18a8d]'>
                    <p>Hi There! Welcome to my portfolio website</p>
                </div>
                <div className='my-2 text-lg'>
                    <p>I am a recent software development graduate with expertise in <strong>Python</strong>, <strong>C++</strong>, and <strong>AWS</strong>. I am excited to pursue a career as a <strong>web/software developer</strong> with a keen interest in <strong>cloud computing</strong> services.</p>
                    <br />
                    <p>My journey in software development has been a delightful adventure, working on diverse projects, from a C++ library management system to full-stack web applications. Additionally, I have gained a strong understanding of cloud services and acquired hands-on experience with AWS. I am eager to contribute my skills and knowledge to the IT industry while growing with a company. </p>
                    <br />
                    <p>Beyond coding, I find joy in exploring the world through traveling, practicing yoga, and savoring a good glass of wine. Weekends often find me at cozy cafes, enjoying delicious brunches, or scrolling through Instagram to admire adorable dogs and cats.</p>
                    <br />
                    <p>Thank you for visiting my portfolio, and I look forward to connecting with you!</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full sm:flex gap-10 m-3 px-4'>
                <div className='text-2xl font-bold text-[#d18a8d]'>
                    <p>Certification</p>
                </div>
                <div className='flex'>
                    <img src ={badge1} width='110' className='mx-7' alt='badge1' />
                    <img src ={badge2} width='110' className='mx-7' alt='badge2' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About