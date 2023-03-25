import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    const handleEvent = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, []);
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="relative" ref={menuRef}>
        <button
          className="bg-sky-500 rounded-lg text-white py-2 px-5 font-semibold hover:bg-sky-600 transition-colors duration-150"
          onClick={() => setIsOpen(!isOpen)}
        >
          Options
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.1 }}
              className="w-40 bg-white shadow-xl rounded-xl p-2 border mt-4 absolute right-0"
            >
              {Array(5)
                .fill()
                .map((value, i) => (
                  <p
                    className="py-2 px-4 rounded-md hover:bg-slate-100 cursor-pointer text-slate-700 font-semibold"
                    key={i}
                  >
                    Item {i + 1}
                  </p>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dropdown;
