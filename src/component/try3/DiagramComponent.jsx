// DiagramComponent.js
import React from "react";
import ReactFlow, { Controls, Background } from "react-flow-renderer";

const DiagramComponent = () => {
  const handleElementClick = (elementId) => {
    // Handle element click
    console.log(`Element clicked: ${elementId}`);
  };

  const elements = [
    {
      id: "1",
      type: "circle",
      data: { label: "Circle" },
      position: { x: 100, y: 100 },
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "lightblue",
      },
      onClick: () => handleElementClick("1"),
    },
    {
      id: "2",
      type: "rectangle",
      data: { label: "Rectangle" },
      position: { x: 200, y: 200 },
      style: { width: 40, height: 40, background: "lightgreen" },
      onClick: () => handleElementClick("2"),
    },
    // Add more elements as needed
  ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow elements={elements}>
        <Controls />
        <Background color="#f0f0f0" />
      </ReactFlow>
    </div>
  );
};

export default DiagramComponent;
