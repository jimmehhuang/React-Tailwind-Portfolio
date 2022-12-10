import React from 'react'
import Mountainpose from '../assets/images/Mountainpose.jpg';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-700">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    I am now a developer!
                </h2>
                <p className="text-gray-400 py-4 max-w-md">
                    I'll fill this in later.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 via-purple-400 to-violet-500 cursor-pointer'>
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <FiArrowRight size={20} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Mountainpose} alt="profile pic of me on a mountain" className="rounded-2xl mx-auto w-2/3 md:w-full lg:w-2/3"/>
            </div>
        </div>
    </div>
  )
}

export default Home