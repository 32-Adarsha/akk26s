import {RxCrossCircled} from 'react-icons/rx'
import {BsDashCircle} from 'react-icons/bs'
import {FiMinimize2} from "react-icons/fi"
import msu from '../../../public/msu.png'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import "./font.css";
export default function Main()
{
    var number = [4,1,7,4,1,9,8,3,0,9];
    return(
        <div class="flex-1 max-w-4xl mx-auto p-10 -mt-5">
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-4 md:gap-1">
          <li class="relative col-span-2 row-span-2 bg-white rounded-lg ">
            <div className='absolute h-64 w-full text-black flex flex-col justify-center items-center thatMe'> <p className='p-2 text-4xl'>That's</p><p className='p-2 text-8xl -m-8'>Me</p></div>
            <div class="absolute h-64 overflow-hidden transform hover:-translate-x-full transition duration-300">
            <img src='./me2.jpg' className='p-0.5 rounded-lg'/></div></li>
          
          <li class="col-span-8 bg-black rounded-lg shadow-xl"><div class="h-32 flex flex-col p-2 justify-center text-center cusFont text-6xl">
            <p>
              {number.map((x) => {
                return <span className='hover:text-red-400 '>{x}</span>
              })}
            </p>
            </div></li>
          <li class="col-span-2  bg-white rounded-lg shadow-xl"><div class="h-32 flex p-2 transform hover:scale-[1.18] transition duration-300 ">
            <img src="/msu.png" alt="image" className='rounded-lg' /></div></li>
          <li class="col-span-7 row-span-2 bg-white rounded-lg shadow-xl">
             
          </li>
          <li class="col-span-3 row-span-3 bg-white rounded-lg ">
              <div class="h-32">
                <img src="/ktm2.jpeg" className='object-contain p-1 rounded-lg shadow-xl'/>
              </div>
          </li>
          <li class="col-span-2 row-span-2  bg-white rounded-lg">
            <div class="h-32 ">
              <img src='./momo.jpeg' className='object-cover p-1 rounded-lg shadow-xl'/>
            </div></li>
          <li class=" bg-white rounded-lg shadow-xl"><div class="h-32 flex flex-col justify-around items-center text-black text-5xl">
          <FaGithub />
          <IoLogoLinkedin className='text-blue-400'/></div></li>
          <li class="col-span-6 bg-purple-400 rounded-lg shadow-2xl"><div class="h-32  text-white flex flex-col justify-center items-center text-6xl p-2 cusFont">
          <p>Adarsha</p>
            <p className='fo'>Khadka</p></div></li>


        
        </ul>
      </div>
    )
}