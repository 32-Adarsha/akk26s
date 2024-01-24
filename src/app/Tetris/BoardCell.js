import "./BoardCell.css";

const BoardCell = ({ cell }) => (
    <div className={`w-auto rounded-md relative ${cell.className}`}>
      <div className="Sparkle"></div>
    </div>
  );
  
  export default BoardCell;
  

  