// TriangleNode.jsx
import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

function TriangleNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="triangle-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TriangleNode;
