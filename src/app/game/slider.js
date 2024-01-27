import Link from "next/link";
import "../Front/font.css";
export const Slider = ({item}) => {
    return (
        <Link href="./TTT">
        <div className="w-72 shadow-xl shadow-black outline outline-black transform hover:scale-110 transition duration-300 shrink-0 h-80 bg-white rounded-lg flex flex-col"> 
            <div className={`w-full h-4/5 p-2 object-cover ${item.Developed? '': "opacity-30"}`}>
                <img className="object-cover w-full h-full" src={item.image}/>
            </div>
            
            <p className="text-black text-center cusFont text-xl mt-4">{item.title}</p>
            
        </div>
        </Link>
    )
}