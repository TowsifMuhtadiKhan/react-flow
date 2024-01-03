import React from "react";
import { useDrag } from "react-dnd";

const shapes = {
  circle: (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "lightblue",
      }}
    ></div>
  ),
  rectangle: (
    <div
      style={{ width: "40px", height: "40px", background: "lightgreen" }}
    ></div>
  ),
  // Add more shapes as needed
};

const SidebarItem = ({ type }) => {
  const [, drag] = useDrag({
    type,
    item: { type },
  });

  return (
    <div
      ref={drag}
      style={{ padding: "8px", cursor: "move", marginBottom: "8px" }}
    >
      {shapes[type]}
    </div>
  );
};

export default SidebarItem;
