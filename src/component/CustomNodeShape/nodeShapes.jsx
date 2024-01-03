// Flow.jsx
import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import TextUpdaterNode from "./TextUpdaterNode";
import CircleNode from "./CircleNode";
import TriangleNode from "./TriangleNode"; // Import the new triangle node
import DiamondNode from "./DiamondNode";
import RectangleNode from "./RectangleNode";
import TrapezoidNode from "./TrapezoidNode";

import "./text-updater-node.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "node-1",
    type: "circleNode",
    position: { x: 150, y: 0 },
    data: { label: "Circle" },
  },
  {
    id: "node-2",
    type: "rectangleNode", // Use the new rectangle node type
    position: { x: 600, y: 0 },
    data: { label: "Rectangle" },
  },
  {
    id: "node-3",
    type: "triangleNode",
    position: { x: 300, y: 0 },
    data: { label: "Triangle" },
  },
  {
    id: "node-4",
    type: "diamondNode",
    position: { x: 450, y: 0 },
    data: { label: "Diamond" },
  },
  {
    id: "node-5",
    type: "rectangleNode",
    data: { label: "API", type: "api" },
    position: { x: 0, y: 150 },
  },
  {
    id: "node-6",
    type: "rectangleNode",
    data: { label: "Scripting", type: "scripting" },
    position: { x: 250, y: 150 },
  },
  {
    id: "node-7",
    type: "rectangleNode",
    data: { label: "Listener", type: "listener" },
    position: { x: 350, y: 150 },
  },
  {
    id: "node-8",
    type: "rectangleNode",
    data: { label: "Sub-process", type: "sub-process" },
    position: { x: 450, y: 150 },
  },
  {
    id: "node-9",
    type: "rectangleNode",
    data: { label: "Rule", type: "rule" },
    position: { x: 250, y: 350 },
  },
  {
    id: "node-10",
    type: "rectangleNode",
    data: { label: "Database", type: "database" },
    position: { x: 250, y: 450 },
  },
  {
    id: "node-11",
    type: "trapezoidNode",
    position: { x: 600, y: 150 },
    data: { label: "Trapezoid" },
  },
];

const nodeTypes = {
  circleNode: CircleNode,
  triangleNode: TriangleNode,
  diamondNode: DiamondNode,
  rectangleNode: RectangleNode,
  trapezoidNode: TrapezoidNode, // Add the new node type
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </div>
  );
}

export default Flow;
