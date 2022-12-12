import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl">I graduated from UT Austin in 2017 with a BA in Sociology. Since then, I mostly
            actually wandered around the medical field- from EMT work, to scribing in an outpatient clinic, to working in
            an ophthalmology clinic as a technician. I decided to switch career paths to software out of vague interests in
            coding and made the jump in 2022!</p>
            <br/>
            <p className="text-xl">My hobbies include video games, obstacle course races, swimming, 
            and playing the guitar for church events! I also like to travel and explore new places, 
            foods, and sights whenever possible.</p>
        </div>
    </div>
  )
}

export default About