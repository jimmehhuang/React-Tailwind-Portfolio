import React from 'react'
import utopiatextgame from '../assets/images/utopiatextgame.png'
import playdateapp from '../assets/images/playdateapp.png'
import sqlemployeetracker from '../assets/images/sqlemployeetracker.png'
import codingquiz from '../assets/images/codingquiz.png'
import ecommerceorm from '../assets/images/ecommerceorm.png'
// import the pictures
// modify anchor links for the buttons on each card

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: utopiatextgame,
            repo: 'https://github.com/pariselectra/Group_9_Project_2',
            app: 'https://road-to-utopia.herokuapp.com/'
        },
        {
            id: 2,
            src: playdateapp,
            repo: 'https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents',
            app: 'https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/'
        },
        {
            id: 3,
            src: sqlemployeetracker,
            repo: 'https://github.com/jimmehhuang/SQL-Employee-Tracker'
        },
        {
            id: 4,
            src: codingquiz,
            repo: 'https://github.com/jimmehhuang/Code-Quiz-Webpage',
            app: 'https://jimmehhuang.github.io/Code-Quiz-Webpage/'
        },
        {
            id: 5,
            src: ecommerceorm,
            repo: 'https://github.com/jimmehhuang/E-commerce-Backend-ORM'
        },
        {
            id: 6,
            src: ''
        }
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>These are some of my collaborative works and personal projects!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id, src, repo, app}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={repo}>Repo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={app}>App</a></button>
                    </div>
                </div>
            ))}
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default Portfolio