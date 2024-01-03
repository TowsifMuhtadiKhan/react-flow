// RectangleNode.jsx
import React from "react";

function RectangleNode({ data }) {
  return (
    <div className={`rectangle-node ${data.type}`}>
      <div>{/* <label>{data.label}</label> */}</div>
    </div>
  );
}

export default RectangleNode;
