import React from "react";

const TextItem = ({ item, onMouseDown }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: item.x,
        top: item.y,
        fontSize: item.fontSize,
        fontFamily: item.fontFamily,
        fontWeight: item.fontWeight,
        textAlign: item.textAlign,
        cursor: "move",
      }}
      onMouseDown={onMouseDown}
    >
      {item.text}
    </div>
  );
};

export default TextItem;
