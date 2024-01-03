// App.js
import React from "react";
import DiagramComponent from "./DiagramComponent";
import SidebarItem from "./SidebarItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Flow = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "200px",
            padding: "16px",
            borderRight: "1px solid #ccc",
          }}
        >
          <SidebarItem type="circle" />
          <SidebarItem type="rectangle" />
          {/* Add more shapes as needed */}
        </div>

        {/* Diagram */}
        <DiagramComponent />
      </div>
    </DndProvider>
  );
};

export default Flow;
