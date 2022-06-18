import React, { useEffect, useState } from "react";
const Cursor = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: globalCoords.y - 89,
        left: globalCoords.x + 10,
        height: 7,
        width: 7,
        borderRadius: "50%",
        backgroundColor: "rgba(50, 200, 200)",
        mixBlendMode: "difference",
        transition: "all 0.095s linear",
        zIndex: 100,
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default Cursor;
