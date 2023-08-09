import React from 'react'

import ecommerce from '../assets/ecommerce.png'
import blog from '../assets/blog.png'
import movie from '../assets/movie.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Projects() {
  return (
    <div name='projects' className='w-full h-full pt-9 sm:pt-5 mt-9 pb-9'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#d18a8d] text-[#595758]'>Projects</p>
                <p className='py-6 text-lg'>Explore my projects by navigating left or right</p>
            </div>

            
            <div className='portfolio_container'>
                <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                <SwiperSlide className='p-5'>
                    <img src={ecommerce} className='rounded' alt='ecommerce'/>
                    <div className='flex flex-col justify-center items-center p-4'>
                        <h3 className='font-bold m-3 text-2xl lg:text-3xl text-[#d18a8d]'>E-commerce Website</h3>
                        <p className='m-3'>
                        The website was developed with <strong>ReactJS</strong> for the frontend and <strong>Django REST framework</strong> for the backend, delivering a smooth shopping experience with a fully functional <strong>cart</strong>, <strong>search</strong>, and <strong>filter</strong> capabilities. Users can easily add products to their carts, manage quantities, and securely complete payments through the integrated <strong>Stripe gateway</strong>.The website is now hosted on AWS with <strong>Elastic Beanstalk, S3 and RDS</strong>.</p>
                        <div className='lg:mb-5 mt-2'>
                            <a href="https://drive.google.com/file/d/1EdlIs_-LttboHm3Py6MJR_-cNvU0A6rL/view?usp=sharing" className='m-2'>
                                <button className="button">Demo</button>
                            </a>
                            <a href="http://e-commerce-dev.ap-southeast-2.elasticbeanstalk.com/" className='m-2'>
                                <button className="button">Website</button>
                            </a>
                            <a href="https://github.com/elliehkim/django-ecommerce" className='m-2'>
                                <button className="button">Code</button>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-5'>
                    <img src={blog} className='rounded' alt='blog'/>
                    <div className='flex flex-col justify-center items-center p-4'>
                            <h3 className='font-bold m-2 text-2xl lg:text-3xl text-[#d18a8d]'>Blog Website</h3>
                            <p className='m-3'>I have created a user-friendly blog website using <strong>Flask</strong> and <strong>MongoDB</strong>. The blog allows users to publish posts with the ability to <strong>upload images</strong>. It incorporates essential functionalities such as login authentication, search functionality and the email enquiry system. The website is currently deployed on a <strong>Heroku</strong> server. Please check the demo below and feel free to interatct with and explore the website!</p>
                            <div className='lg:mb-5 mt-2'>
                                <a href="https://drive.google.com/file/d/16-3_D62gDF2IZAKOPzDVzN0La_SlbEMR/view?usp=sharing" className='m-2'>
                                    <button className="button">Demo</button>
                                </a>
                                <a href="https://flask-blog-23-7080711d2688.herokuapp.com/" className='m-2'>
                                    <button className="button">Website</button>
                                </a>
                                <a href="https://github.com/elliehkim/flask-blog" className='m-2'>
                                    <button className="button">Code</button>
                                </a>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className='p-5'>
                    <img src={movie} className='rounded' alt='movie' />
                    <div className='flex flex-col justify-center items-center p-4'>
                            <h3 className='font-bold m-2 text-2xl lg:text-3xl text-[#d18a8d]'>Movie Search</h3>
                            <p className='m-3'>This project was built with <strong>React</strong> and a <strong>movie API</strong>. It allows the visitors to simply input a movie's title and instantly access concise information about the movie.</p>
                            <div className='lg:mb-5 mt-2'>
                                <a href="https://drive.google.com/file/d/1eLE9FdVjBLkGUsL0rh0cgSIBhqgIxV8f/view?usp=sharing" className='m-2'>
                                    <button className="button">Demo</button>
                                </a>
                                <a href="https://github.com/elliehkim/moviesearch" className='m-2'>
                                    <button className="button">Code</button>
                                </a>
                            </div>
                        </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-20 pb-20'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-[#d18a8d] text-[#595758]'>Cloud Projects</p>
                <p className='py-6 text-lg'>As an individual passionate about Cloud computing, I have had the opportunity to work on a few projects with AWS. Check out the descriptions below!</p>
            </div>
            <div className='pt-5 text-lg'>
                <div className='p-2'>
                    <p className='text-xl font-bold text-[#d18a8d]'>1. Host full-stack website:</p>
                    <p className='pl-4'>My e-commerce application is deployed on AWS with <strong>Elastic Beanstalk</strong>, <strong>RDS</strong> and <strong>S3</strong>. The website's database was efficiently handled using Amazon RDS and I utilized Amazon S3 for storing and serving static assets such as react js code, css and images files</p>
                </div>
                <div className='p-2'>
                    <p className='text-xl font-bold text-[#d18a8d]' >2. Build a Serverless Web Application</p>
                    <p className='pl-4'>I created a serverless web application, WildRydes, following a comprehensive workshop provided by AWS. Through this project, I gained the knowledge of serverless backend architecture with <strong>AWS Lambda</strong>, an event-driven function-as-a-service. By utilizing <strong>Amazon API Gateway</strong>, I learned how to design and manage RESTful APIs that interacted with the backend Lambda functions. The workshop allowed me to understand the use case of AWS <strong>Amplify</strong> Console for continuous deployment and hosting of the frontend resources. Also, <strong>AWS Congnito</strong> was used for user authentication.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects