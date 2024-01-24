import { useState } from "react";
import BoardCell from "./BoardCell";
import "./Board.css";


export default function App({ rows, columns }) {
  const defaultCell = {
    occupied: false,
    className: "",
  };

  // Create the initial board array
  const initialBoardArray = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  // Initialize the state with the board array and size
  const [board, setBoard] = useState({
    rows: initialBoardArray,
    size: { rows, columns },
  });

  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div className="Board w-[380px] h-5/6 m-auto bg-slate-200 border-slate-100 rounded-md shadow-2xl shadow-slate-100" style={boardStyles}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
}
