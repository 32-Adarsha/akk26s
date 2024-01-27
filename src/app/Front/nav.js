import { HiHome } from "react-icons/hi2";
import { PiBooksFill } from "react-icons/pi";
import {BsController} from 'react-icons/bs'
import Link from 'next/link'
import "./font.css"
export default function Navbar()
{
    return(
        <nav className="py-10 mb-12 mx-auto max-w-4xl flex justify-between w-full p-4 mt-4 rounded-lg scale-105">
            <h1 className='thatMe text-6xl text-black scale-110 transform hover:scale-110 transition duration-300'>32</h1>
            <ul className='flex items-center'>
                <li>
                    <Link href="/" > <HiHome className='cursor-pointer text-3xl text-black transform hover:scale-110 transition duration-300'/></Link>
                </li>
                <li>
                    <PiBooksFill className='cursor-pointer ml-5 text-3xl text-black transform hover:scale-110 transition duration-300'/>
                </li>
                <li>
                    <Link href="/game" ><BsController className='text-3xl ml-5 cursor-pointer text-green-950 transform hover:scale-110 transition duration-300'/></Link>
                </li>
                <li>
                    <a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transform hover:scale-110 transition duration-300'>
                        Resume
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}