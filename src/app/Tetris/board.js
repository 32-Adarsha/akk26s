import { useState } from "react";
import BoardCell from "./BoardCell"

export default function App({rows , columns})
{
    const defaultCell =  {
        occupied: false,
        className: ""
    }

    const boardArray = Array.from({length:rows} , ()=> 
        Array.from({length:columns}, () => ({...defaultCell})))

        

    
    console.log(boardArray);
    return (
        <div>
          {boardArray.map((rows, y) => (
            <div className="flex" key={y}>
              {rows.map((cell, x) => (
                <BoardCell key={`${x}-${y}`} cell={cell} />
              ))}
            </div>
          ))}
        </div>
      );

}