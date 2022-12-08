import React from 'react'
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import {MdPerson} from 'react-icons/md';

const Links = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FiLinkedin size={25}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/jimmy-huang-04468797/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FiGithub size={25}/>
                </>
            ),
            href: 'https://github.com/jimmehhuang',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <SiGmail size={25}/>
                </>
            ),
            href: 'mailto:jimmymhuang@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <MdPerson size={25}/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-700" + " " + style}>
                <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
                    {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Links