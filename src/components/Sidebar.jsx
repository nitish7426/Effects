import React, { useEffect } from "react";
import { motion } from "framer-motion";
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full top-0 fixed z-10 bg-black/40 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <motion.aside
        initial={{ opacity: 0, x: "25rem" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "25rem" }}
        transition={{ type: "just" }}
        className="w-60 bg-white h-full ml-auto flex flex-col justify-center px-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {Array(8)
          .fill()
          .map((value, i) => (
            <div
              className="w-full h-7 animate-pulse bg-neutral-300 rounded-md"
              key={i}
            ></div>
          ))}
      </motion.aside>
    </motion.div>
  );
};

export default Sidebar;
