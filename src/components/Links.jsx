import React from 'react'
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import {} from 'react-icons';

const Links = () => {
  return (
    <div className="flex flex-row bottom-0 fixed text-white">
        <ul>
            <li className="flex justify-between items-center w-40 h-1/4 px-4">
                <a href="">
                    <>
                        LinkedIn <FiLinkedin />
                        GitHub <FiGithub />
                        Email <SiGmail />

                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Links