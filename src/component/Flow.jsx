import { useState } from "react";
import ReactFlow, { Background, Panel } from "reactflow";
import "reactflow/dist/style.css";

import defaultNodes from "./reactFlow/node.jsx";
import defaultEdges from "./reactFlow/edges.jsx";

function Flow() {
  const [variant, setVariant] = useState("cross");

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        fitView
      >
        <Background color="#ccc" variant={variant} />
        <Panel>
          <div>variant:</div>
          <button onClick={() => setVariant("dots")}>dots</button>
          <button onClick={() => setVariant("lines")}>lines</button>
          <button onClick={() => setVariant("cross")}>cross</button>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default Flow;
