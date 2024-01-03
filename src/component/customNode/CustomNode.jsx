// CustomNode.js
import React from "react";

const CustomNode = ({ data }) => {
  const { name, shape, color } = data;

  const renderShape = () => {
    switch (shape) {
      case "circle":
        return (
          <div
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              background: color,
            }}
          ></div>
        );
      case "diamond":
        return (
          <div
            style={{
              width: "50px",
              height: "50px",
              transform: "rotate(45deg)",
              background: color,
            }}
          ></div>
        );
      case "square":
        return (
          <div
            style={{ width: "50px", height: "50px", background: color }}
          ></div>
        );
      case "triangle":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderBottom: `50px solid ${color}`,
            }}
          ></div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "8px",
        width: "150px",
      }}
    >
      <h3>{name}</h3>
      {renderShape()}
    </div>
  );
};

export default CustomNode;
