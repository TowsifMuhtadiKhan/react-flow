import React, { useState } from "react";
import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";

const initialElements = [];

const getBorderRadius = (shape) => {
  switch (shape) {
    case "circle":
      return "50%";
    case "triangle":
      return "0% 100% 100%";
    case "square":
      return "0%";
    case "diamond":
      return "50% 0% 50% 0%";
    default:
      return "50%";
  }
};

const NewApp = () => {
  const [elements, setElements] = useState(initialElements);
  const [nodeName, setNodeName] = useState("");
  const [nodeColor, setNodeColor] = useState("#00ff00");
  const [nodeShape, setNodeShape] = useState("circle");

  const addCustomNode = () => {
    const newNode = {
      id: Date.now().toString(),
      data: { label: nodeName, color: nodeColor, shape: nodeShape },
      position: { x: 0, y: 0 },
      style: {
        backgroundColor: nodeColor,
        borderRadius: getBorderRadius(nodeShape),
      },
      type: "customNode",
    };

    setElements((prevElements) => [...prevElements, newNode]);
  };

  const onNodeNameChange = (e) => {
    setNodeName(e.target.value);
  };

  const onNodeColorChange = (color) => {
    setNodeColor(color.hex);
  };

  const onNodeShapeChange = (e) => {
    const shape = e.target.value;
    setNodeShape(shape);

    const updatedNodeTypes = {
      customNode: ({ data }) => (
        <div
          style={{
            background: data.color,
            borderRadius: getBorderRadius(shape),
          }}
        >
          {data.label}
        </div>
      ),
    };

    setNodeTypes(updatedNodeTypes);
  };

  const [nodeTypes, setNodeTypes] = useState({
    customNode: ({ data }) => (
      <div
        style={{
          background: data.color,
          borderRadius: getBorderRadius(nodeShape),
        }}
      >
        {data.label}
      </div>
    ),
  });

  return (
    <div>
      <div>
        <label>Node Name:</label>
        <input type="text" value={nodeName} onChange={onNodeNameChange} />
      </div>
      <div>
        <label>Node Color:</label>
        <input
          type="color"
          value={nodeColor}
          onChange={(e) => onNodeColorChange(e)}
        />
      </div>
      <div>
        <label>Node Shape:</label>
        <select value={nodeShape} onChange={onNodeShapeChange}>
          <option value="circle">Circle</option>
          <option value="triangle">Triangle</option>
          <option value="square">Square</option>
          <option value="diamond">Diamond</option>
        </select>
      </div>
      <button onClick={addCustomNode}>Add Custom Node</button>
      <div style={{ width: "100%", height: "500px" }}>
        <ReactFlow
          elements={elements}
          onConnect={() => {}}
          onDelete={() => {}}
          onElementClick={() => {}}
          onNodeDragStop={() => {}}
          onLoad={() => {}}
          onSelectionChange={() => {}}
          nodeTypes={nodeTypes}
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default NewApp;
