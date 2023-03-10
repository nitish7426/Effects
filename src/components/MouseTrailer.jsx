import React, { useState } from "react";

const MouseTrailer = () => {
  const [clientX, setClientX] = useState("");
  const [clientY, setClientY] = useState("");

  const handleMouseMove = (e) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
    console.log(e);
  };

  return (
    <div
      className="h-screen w-full bg-slate-900 relative"
      onMouseMove={handleMouseMove}
    >
      <div
        className="h-32 w-32 bg-gradient-to-l from-orange-600 to-cyan-400 rounded-full animateGradient fixed z-50  blur-3xl opacity-40"
        style={{
          left: `${clientX - 64}px`,
          top: `${clientY - 64}px`,
        }}
      ></div>
    </div>
  );
};

export default MouseTrailer;
