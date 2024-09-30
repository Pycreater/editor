import React from "react";
import {
  FaBold,
  FaUnderline,
  FaItalic,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

const Controls = ({
  inputValue,
  setInputValue,
  handleAddText,
  handleStyleChange,
  selectedItemId,
  currentFontSize,
}) => {
  return (
    <>
      {selectedItemId && (
        <div className="flex justify-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleStyleChange("fontSize", "smaller")}
              className="border border-gray-400 p-1 rounded-lg"
            >
              -
            </button>
            <span className="mx-2">{currentFontSize}</span>
            <button
              onClick={() => handleStyleChange("fontSize", "larger")}
              className="border border-gray-400 p-1 rounded-lg"
            >
              +
            </button>
          </div>

          <label className="flex items-center gap-2">
            <select
              onChange={(e) => handleStyleChange("fontFamily", e.target.value)}
              className="border border-gray-400 p-1 rounded-lg"
            >
              <option value="Arial">Font</option>
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
          </label>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleStyleChange("fontWeight", "bold")}
              className="flex items-center"
            >
              <FaBold className="text-lg" />
            </button>
            <button
              onClick={() => handleStyleChange("fontStyle", "italic")}
              className="flex items-center"
            >
              <FaItalic className="text-lg" />
            </button>
            <button
              onClick={() => handleStyleChange("textDecoration", "underline")}
              className="flex items-center"
            >
              <FaUnderline className="text-lg" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => handleStyleChange("textAlign", "left")}>
              <FaAlignLeft className="text-lg" />
            </button>
            <button onClick={() => handleStyleChange("textAlign", "center")}>
              <FaAlignCenter className="text-lg" />
            </button>
            <button onClick={() => handleStyleChange("textAlign", "right")}>
              <FaAlignRight className="text-lg" />
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text here"
          className="border border-gray-400 p-2 rounded-lg"
        />
        <button
          onClick={handleAddText}
          className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-lg"
        >
          Add Text
        </button>
      </div>
    </>
  );
};

export default Controls;
