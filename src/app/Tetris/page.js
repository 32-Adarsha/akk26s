'use client';
import Tgame from "./Tetris"

export default function App()
{
    return (
        <div className="h-screen w-screen bg-black flex justify-center pt-10">
            <Tgame rows={20} columns={10}/>
        </div>
    )
}