import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-sky-500 rounded-lg text-white py-2 px-5 font-semibold hover:bg-sky-600 transition-colors duration-150 capitalize"
      onClick={onClick}
    >
      {text || "add text"}
    </button>
  );
};

export default Button;
