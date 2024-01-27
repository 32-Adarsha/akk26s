"use client";
import { RxCrossCircled } from "react-icons/rx";
import { BsDashCircle } from "react-icons/bs";
import { FiMinimize2 } from "react-icons/fi";
import msu from "../../../public/msu.png";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import {
  SiCplusplus,
  SiPython,
  SiDocker,
  SiCss3,
  SiDjango,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiKotlin,
} from "react-icons/si";
import "./font.css";
import { useState } from "react";

export default function Main() {
  const [isMouseOver, setMouseOver] = useState(false);
  var pg =
    "outline outline-black rounded-lg p-1 shadow-lg shadow-black transform transform hover:scale-105 transition duration-2000";
  const handleHover = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  var number = [4, 1, 7, 4, 1, 9, 8, 3, 0, 9];
  return (
    <div class="flex-1 max-w-5xl mx-auto p-10 -mt-5">
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-4 md:gap-1">
        <li class="relative col-span-2 row-span-2 bg-white rounded-lg ">
          <div
            className={`absolute h-64 w-full ${
              isMouseOver
                ? "transform -translate-x-full transition duration-300"
                : "transform transition duration-300"
            } text-black flex flex-col justify-start items-center thatMe`}
          >
            {" "}
            <p className="p-2 text-4xl">That's</p>
            <p className="p-2 text-8xl -m-8">Me</p>
          </div>
          <div
            className={`absolute h-64 overflow-hidden transform hover:scale-105 transition duration-300`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <img src="./me2.jpg" className="p-0.5 rounded-lg" />
          </div>
        </li>

        <li class="col-span-8 bg-gradient-to-bl from-teal-600 to-teal-500 text-black border-gray-950 border-2 rounded-lg shadow-2xl">
          <div class="h-32 flex flex-col p-2 justify-center text-center cusFont text-6xl">
            <p className="font-serif text-lg border-b pb-1">
              Missouri State University
            </p>
            <p>
              {number.map((x) => {
                return (
                  <span className="hover:text-red-300 cursor-default text-yellow-50">
                    {x}
                  </span>
                );
              })}
            </p>
            <p className="font-serif text-xl text-gray-800">
              32kiran.adarsha@gmail.com
            </p>
          </div>
        </li>
        <li class="col-span-2  bg-white rounded-lg shadow-xl">
          <div class="h-32 flex flex-col justify-center items-center p-2 transform hover:scale-[1.15] transition duration-300 ">
            <img src="/msu.png" alt="image" className="rounded-lg" />
          </div>
        </li>
        <li class="col-span-7 row-span-2 bg-white rounded-lg shadow-xl">
          <div class="h-64 bg-white flex self-center rounded-lg">
            <div className="w-4/6 p-1">
              <img className="h-64 rounded-lg" src="./welcome.gif" />
            </div>
            <div className="bg-white text-black text-5xl w-2/6 h-64 flex flex-wrap mt-2 gap-3 justify-center py-3 -ml-[4px]">
              <SiCplusplus className={pg} />
              <SiPython className={pg} />
              <SiDocker className={pg} />
              <SiCss3 className={pg} />
              <SiDjango className={pg} />
              <SiJavascript className={pg} />
              <SiReact className={pg} />
              <SiHtml5 className={pg} />
              <SiKotlin className={pg} />
            </div>
          </div>
        </li>
        <li class="col-span-3 row-span-3 bg-white rounded-lg ">
          <div class="h-32">
            <img
              src="/ktm2.jpeg"
              className="object-contain p-1 rounded-lg shadow-xl"
            />
            <p className="p-2 text-3xl text-black cusFont">Kathmandu</p>
            <p className="text-center -mt-4  text-lg text-black cusFont">City of Temple</p>
            
          </div>
        </li>
        <li class="col-span-2 row-span-2  bg-white rounded-lg">
          <div class="h-32">
            <img
              src="./momo.jpeg"
              className="object-cover p-1 rounded-lg shadow-xl"
            />
            <p className="p-2 text-6xl thatMe">MOMO</p>
          </div>
          
        </li>
        <li class=" bg-white rounded-lg shadow-sm shadow-black hover:scale-105 outline outline-black transform transition duration-200">
          <div class="h-32 flex flex-col justify-around items-center text-black text-5xl">
            <FaGithub />
            <IoLogoLinkedin className="text-blue-400" />
          </div>
        </li>
        <li class="col-span-6 bg-purple-400 rounded-lg shadow-2xl mx-3">
          <div class="h-32  text-white flex flex-col justify-center items-center text-6xl p-2 cusFont">
            <p>Adarsha</p>
            <p className="fo">Khadka</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
