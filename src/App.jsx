import { useState } from "react";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";
import HistoryControls from "./components/HistoryControls";
import "./App.css";

function App() {
  const [textItems, setTextItems] = useState([]); // Text items on the canvas
  const [inputValue, setInputValue] = useState(""); // For input box
  const [selectedItemId, setSelectedItemId] = useState(null); // Currently selected item for styling

  const [history, setHistory] = useState([]); // Undo history
  const [redoStack, setRedoStack] = useState([]); // Redo history

  // Save the current state to history
  const saveHistory = (newState) => {
    setHistory([...history, newState]);
    setRedoStack([]); // Clear redo stack on new action
  };

  // Add text to the canvas
  const handleAddText = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        text: inputValue,
        x: 100,
        y: 100,
        fontSize: "16px",
        fontFamily: "Arial",
        fontWeight: "normal",
        textAlign: "left",
      };
      const newTextItems = [...textItems, newItem];
      setTextItems(newTextItems);
      saveHistory(newTextItems);
      setInputValue(""); // Reset input field
    }
  };

  // Update style properties for selected text item
  const handleStyleChange = (property, value) => {
    if (selectedItemId) {
      let newValue = value;
      if (property === "fontSize") {
        const currentSize = parseInt(
          textItems.find((item) => item.id === selectedItemId).fontSize
        );
        newValue =
          value === "larger" ? `${currentSize + 2}px` : `${currentSize - 2}px`;
      }

      const updatedItems = textItems.map((item) =>
        item.id === selectedItemId ? { ...item, [property]: newValue } : item
      );
      setTextItems(updatedItems);
      saveHistory(updatedItems); // Save updated state
    }
  };

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center p-4">
        {/* Undo/Redo Controls */}
        <HistoryControls
          handleUndo={() => {
            if (history.length > 0) {
              const lastState = history[history.length - 1];
              setRedoStack([textItems, ...redoStack]);
              setTextItems(lastState);
              setHistory(history.slice(0, -1));
            }
          }}
          handleRedo={() => {
            if (redoStack.length > 0) {
              const nextState = redoStack[0];
              setHistory([...history, textItems]);
              setTextItems(nextState);
              setRedoStack(redoStack.slice(1));
            }
          }}
          undoDisabled={history.length === 0}
          redoDisabled={redoStack.length === 0}
        />

        {/* Canvas */}
        <div className="w-screen bg-gray-50">
          <Canvas
            textItems={textItems}
            setTextItems={setTextItems}
            setSelectedItemId={setSelectedItemId}
            saveHistory={saveHistory}
          />
        </div>

        {/* Input for adding text */}
        <div className="mt-4">
          <Controls
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleAddText={handleAddText}
            handleStyleChange={handleStyleChange}
            selectedItemId={selectedItemId}
            currentFontSize={
              textItems.find((item) => item.id === selectedItemId)?.fontSize ||
              "16px"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
