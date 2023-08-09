import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center pt-9 mt-9 '>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ee6c4d] text-[#595758]'>Contact</p>
                <p className='py-4'>Submit the form below if you want to connect with me!</p>
            </div>
            <input className='p-2 border-4 border-teal-700 rounded' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 border-4 border-teal-700 rounded' type='email' placeholder='Email' name='email'/>
            <textarea className='border-4 border-teal-700 rounded p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='px-4 py-3 my-8 mx-auto flex items-center text-white bg-teal-700 rounded hover:opacity-50'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact