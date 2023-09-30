import Image from "next/image"

export default function game ()
{
    return (
        <div className="bg-white w-screen h-screen">
        <div className="flex justify-center items-center h-5/6 flex-wrap">
            <div>
            <Image src="/stop.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className=""
            />
            <span className="w-screen bg-orange-500 px-5 py-3 rounded-md text-white text-lg font-semibold cursor-pointer">Under Construction</span>
            </div>
           
        </div>
        
      </div>
    )
}