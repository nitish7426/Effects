import React, { useEffect, useState } from "react";

const TextEffect = () => {
  const [text, setText] = useState("nitishmahawar");

  useEffect(() => {
    const name = "nitishmahawar";
    let iteration = 0;
    let interval = setInterval(() => {
      const chars = "abcdefghijklmnopqrstuvwxyz";
      const generatedString = name
        .split("")
        .map((value, i) => {
          if (i < iteration) {
            return value;
          } else {
            return chars[Math.floor(Math.random() * 26)];
          }
        })
        .join("");
      setText(generatedString);
      if (iteration >= name.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col gap-6 items-center justify-center">
      <h3 className="text-5xl font-bold font-major">{text}</h3>
    </div>
  );
};

export default TextEffect;
