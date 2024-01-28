"use client";
import { useState, useEffect } from "react";
import "../Front/font.css";

export default function Trick({ setStart }) {
  const [onP, setonP] = useState(true);
  const [value, setValue] = useState("X");
  const [xo, setXO] = useState(
    Array.from({ length: 9 }, () => ({ content: "", filled: false }))
  );
  const [gameOver, setgameOver] = useState({
    over: false,
    cord: [],
    player: "",
  });

  const handle_xo = () => {
    value === "X" ? setValue("O") : setValue("X");
  };

  const handle_onP = () => {
    onP ? setonP(false) : setonP(true);
  };

  useEffect(() => {
    var ply = checkWinner();
    var draw = checkDraw();
    if (ply.over) {
      setgameOver({
        over: ply.over,
        cord: ply.comb,
        player: ply.player,
      });
      setTimeout(() => {
        alert(`${ply.player.toUpperCase()} WON THE GAME`)
        setStart(false);
      }, 700);
    };
    if (draw) {
      setTimeout(() => {
        alert(`It's a draw`)
        setStart(false);
      }, 700);
    }
  }, [xo]);

  const checkDraw = () => {
    for (const item of xo) {
      if (!item.filled) {
        return false;
      }
    }
    return true;
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        xo[a].content &&
        xo[a].content === xo[b].content &&
        xo[b].content === xo[c].content
      ) {
        return {
          comb: combination,
          over: true,
          player: (xo[a].content == "X")? "Player 1" : "Player 2",
          
        };
      }
    }

    return { win: false };
  };

  const handle_click = (event) => {
    const clickedDiv = event.target;
    var num = parseInt(clickedDiv.dataset.propid);

    if (!xo[num].filled) {
      setXO((prevXO) => {
        const updatedXO = [...prevXO];
        updatedXO[num] = {
          content: value,
          filled: true,
        };
        return updatedXO;
      });
      handle_xo();
      handle_onP();
    } else {
      setXO((prevXO) => {
        const updatedXO = [...prevXO];
        return updatedXO;
      });
    }
  };

  return (
    <>
       
      <div className="relative flex justify-start items-center w-96 px-3 text-black cusFont">
        <div
          className={`absolute ${
            onP
              ? "transform transition -translate-x-0 duration-500"
              : "transform transition translate-x-56 mx-1 duration-500"
          } w-[135px] h-[50px] px-3 bg-emerald-400 rounded-lg`}
        ></div>
        <div className="absolute flex flex-row w-full justify-between px-3 items-center text-black">
          <div className="">
            <p>Player 1</p>
          </div>
          <div className="mr-5">
            <p>Player 2</p>
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto h-96 bg-black grid grid-cols-3">
        {xo.map((value, index) => {
          return (
            <div
              key={index}
              className="w-32 h-32 bg-white flex justify-center items-center"
            >
              <div
                key={index}
                onClick={gameOver.over ? null : handle_click}
                data-propid={index}
                className={`w-[120px] h-[120px] flex justify-center items-center mx-auto ${gameOver.cord.includes(index)? "bg-slate-400" : "bg-slate-900"} rounded-lg text-white cusFont text-7xl`}
              >
                {xo[index].content}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
