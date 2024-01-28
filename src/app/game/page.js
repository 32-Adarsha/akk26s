import Image from "next/image";
import { Slider } from "./slider";
import "../Front/font.css";
import Navbar from "../Front/nav";

export default function game() {
    console.log("HI");
    const items = [
        {
            title : "Tic-tac-toe",
            link : "./TTT",
            Developed: true,
            image: "./tick.png",
            
        },
        {
            title : "Fruit Match",
            link : "./Fruit",
            Developed: true,
            image: "./fruit.png",
            
        },
        {
            title : "Tetris",
            link : null,
            Developed: false,
            image: "./tetris.png",
            
        },
    
    ];
    console.log(items);
  return (
    <main className="flex flex-col bg-white h-screen px-10">
      <Navbar />
      <div className="flex w-full justify-center items-center">
        <div className="flex gap-8 justify-center items-center w-4/6 h-96">
          {items.map((item) => {
            return <Slider item = {item}/>
        })}
        </div>
      </div>
    </main>
  );
}
