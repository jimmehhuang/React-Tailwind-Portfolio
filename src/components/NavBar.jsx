import React, {useState} from 'react'
import {FiHome, FiMenu} from 'react-icons/fi';
import {Link} from 'react-scroll';

const NavBar = () => {
    
    const {nav, setNav} = useState(false);

    const navs = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {   
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'contact'
        }
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className="text-5xl fon-signature ml-2">Jimmy Huang</h1>
        </div>
        {/* navbar items */}
        <ul className="hidden md:flex">
            {navs.map(({id, link}
            ) => (            
                <li key={id} className="px-4 cursor-pointer capitalize hover:scale-110"> 
                    <Link to={link} smooth duration={500}> {link} </Link>
                 </li>
            ))}
        </ul>
        {/* react icons */}
        <div onClick={() => setNav(!nav)}className="cursor-pointer pr-4 z-10 text-gray-500 hover:scale-110 md:hidden">
            {nav ? <FiHome size={30}/> : <FiMenu size={30}/>}
        </div>

        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {navs.map(({id, link}
            ) => (            
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl"> 
                    <Link to={link} smooth duration={500}> {link} </Link>
                </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default NavBar