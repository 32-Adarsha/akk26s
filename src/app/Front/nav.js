import {BsFillMoonStarsFill} from 'react-icons/bs'
import { PiBooksFill } from "react-icons/pi";
import {BsController} from 'react-icons/bs'
import Link from 'next/link'
import "./font.css"
export default function Navbar()
{
    return(
        <nav className="py-10 mb-12 mx-auto max-w-5xl flex justify-between w-full">
            <h1 className='thatMe text-6xl text-black'>32</h1>
            <ul className='flex items-center'>
                <li>
                    <BsFillMoonStarsFill className='cursor-pointer text-2xl text-black'/>
                </li>
                <li>
                    <PiBooksFill className='cursor-pointer ml-5 text-3xl text-black'/>
                </li>
                <li>
                    <Link href="/game" ><BsController className='text-3xl ml-5 cursor-pointer text-green-950'/></Link>
                </li>
                <li>
                    <a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
                        Resume
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}