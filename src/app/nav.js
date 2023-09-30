import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsController} from 'react-icons/bs'
import Link from 'next/link'
export default function Navbar()
{
    return(
        <nav className="py-10 mb-12 mx-auto max-w-5xl flex justify-between">
            <h1 className='text-5xl font-serif font-extrabold'>32</h1>
            <ul className='flex items-center'>
                <li>
                    <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
                </li>
                <li>
                    <Link href="/game" ><BsController className='text-3xl ml-5 cursor-pointer'/></Link>
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