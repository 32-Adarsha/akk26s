import {AiOutlineLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

export default function Content()
{
    return(
        <div className="flex justify-center h-4/6">
            <div className="max-w-md">
                <p className="text-4xl font-mono mt-5">Hi, my name is <span className="text-teal-500">Adarsha</span>.</p>
                <p className="font-mono text-xl my-5">I am a computer science student interested in webdesign , AI and ML</p>
                <div className="flex text-4xl mb-20">
                    <AiOutlineLinkedin className="text-blue-600"/>
                    <AiFillGithub className="mx-3"/>
                </div>
                <p className="font-medium font-mono">
                    <span className="text-red-500 text-xl">c++ </span>
                    <span className="text-blue-500 text-xl">c#</span>
                    <span className="text-green-600 text-xl"> react</span>
                    <span className="text-violet-700 text-xl"> py</span>
                    <span className="text-teal-500 text-xl"> .net</span>
                    <span className="text-fuchsia-600 text-xl"> postgres</span>
                    <span className="text-purple-600 text-xl"> django</span> 
                </p>

            </div>
        </div>
    )
}