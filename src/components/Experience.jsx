import React from 'react'
import html from '../assets/images/html'
import css from '../assets/images/css'
import javascript from '../assets/images/javascript'
import nodejs from '../assets/images/nodejs'
import github from '../assets/images/github'
import reactimage from '../assets/images/react'
import mongoDB from '../assets/images/mongoDB'
import mysql from '../assets/images/mysql'
import tailwind from '../assets/images/tailwind'

// import images of the stuff

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: nodejs,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: github,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: reactimage,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: mongoDB,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 8,
            src: mysql,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: tailwind,
            title: 'HTML',
            style: 'shadow-orange-500'
        }
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are some of the technologies I've worked with</p>
            </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src="" alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>HTML</p>
            </div>
        </div>
    </div>
  )
}

export default Experience;