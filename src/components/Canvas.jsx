import React, { useState } from "react";
import TextItem from "./TextItem";

const Canvas = ({
  textItems,
  setTextItems,
  setSelectedItemId,
  saveHistory,
}) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (e, id) => {
    const item = textItems.find((item) => item.id === id);
    setDraggedItem(item);
    setOffsetX(e.clientX - item.x);
    setOffsetY(e.clientY - item.y);
    setSelectedItemId(id);
  };

  const handleMouseMove = (e) => {
    if (draggedItem) {
      const updatedItems = textItems.map((item) =>
        item.id === draggedItem.id
          ? { ...item, x: e.clientX - offsetX, y: e.clientY - offsetY }
          : item
      );
      setTextItems(updatedItems);
    }
  };

  const handleMouseUp = () => {
    if (draggedItem) {
      saveHistory(textItems);
      setDraggedItem(null);
    }
  };

  return (
    <div
      className="relative w-full h-[400px] border border-gray-400"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {textItems.map((item) => (
        <TextItem
          key={item.id}
          item={item}
          onMouseDown={(e) => handleMouseDown(e, item.id)}
        />
      ))}
    </div>
  );
};

export default Canvas;
