import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";

const HistoryControls = ({
  handleUndo,
  handleRedo,
  undoDisabled,
  redoDisabled,
}) => {
  return (
    <div className="flex justify-center gap-4 mb-4 w-full">
      <button
        onClick={handleUndo}
        disabled={undoDisabled}
        className={` p-2 rounded-lg ${
          undoDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <GrUndo size={30} />
        Undo
      </button>
      <button
        onClick={handleRedo}
        disabled={redoDisabled}
        className={` p-2 rounded-lg ${
          redoDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <GrRedo size={30} />
        Redo
      </button>
    </div>
  );
};

export default HistoryControls;
