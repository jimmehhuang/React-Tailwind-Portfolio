import React from 'react'
import Mountainpose from '../assets/images/Mountainpose.jpg';
import {FiArrowDown} from 'react-icons/fi';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-700">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full">
            <div>
                <h2 className="text-white">
                    I am now a developer!
                </h2>
                <p className="text-white">
                    I'll fill this in later.
                </p>
                <div>
                    <button>
                        Portfolio
                        <span>
                            <FiArrowDown/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home