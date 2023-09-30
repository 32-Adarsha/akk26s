import {RxCrossCircled} from 'react-icons/rx'
import {BsDashCircle} from 'react-icons/bs'
import {FiMinimize2} from "react-icons/fi"
export default function Main()
{
    return(
        <div className='flex w- justify-center'>
        <div className="text-xl bg-gray-800 text-white font-thin rounded-md">
            <div className='flex justify-start bg-gradient-to-r from-cyan-500 to-teal-500 h-8 items-center px-2 rounded-t-md'>
            <RxCrossCircled className='text-white'/>
            <BsDashCircle className='text-white mx-2'/>
            <FiMinimize2 className='text-white mr-auto'/>
            <p className='text-xs'>main.cpp</p>
            </div>
            <div className='py-5 px-5'>
                <p>  <span className="text-red-500" >#include</span>&lt;iostream&gt; </p>
                <p> <span className="text-red-500" >#include</span>&lt;string&gt; </p>
                <p> <span className="text-red-500">using </span> namespace std;</p>
            
                <p className="mt-5"><span className="text-red-500">int</span> main() &#123;</p>
                <p className="pl-4"><span className="text-red-500">cout </span>&lt;&lt; <span className="font-semibold font-sans">"Welcome To My Website"</span> &lt;&lt;endl;</p>
                <p>&#125;</p>
            </div>
        </div>
        </div>
    )
}