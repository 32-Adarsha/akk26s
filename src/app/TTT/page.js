"use client";
import "../Front/font.css";
import { useState } from "react";
import Trick from "./tick";
import Link from "next/link";

export default function TTT() {
  const [gStart, setgStart] = useState(false);
  const handelStart = () => {
    setgStart(true);
  }

  return (
    <main className="flex flex-col justify-center items-center bg-white h-screen px-10 gap-10">
      {gStart ? (
        <Trick setStart={setgStart}/>
      ) : (
        <div className="flex flex-col gap-8">
        <button  onClick={handelStart} className="text-white text-4xl transform hover:scale-110 transition duration-200 w-56 bg-green-400 p-4 rounded-lg cusFont">
          Start
        </button>
        <Link href="./game"> <button className="text-white text-4xl transform hover:scale-110 transition duration-200 w-56 bg-green-400 p-4 rounded-lg cusFont">
          back
        </button></Link>
        </div>
      )}
    </main>
  );
}
