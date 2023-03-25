import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className="flex items-center justify-center h-screen relative">
      <AnimatePresence>
        {/* backdrop */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            {/* modal */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="w-full max-w-sm p-4 rounded-xl border shadow-xl space-y-2 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h1 className="text-xl font-medium">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                recusandae quaerat? Repellat harum sed ipsum, molestiae maiores
                nobis reprehenderit iure asperiores veritatis similique
                aspernatur id esse. Accusantium esse debitis inventore!
              </p>
              <button
                className="bg-sky-500 text-white w-24 py-2 rounded-xl font-semibold mr-4"
                onClick={() => setIsOpen(false)}
              >
                Ok
              </button>
              <button
                className="w-24 text-sky-500 font-semibold border py-2 rounded-xl border-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* button */}
      <button
        className="bg-sky-500 text-white py-2 rounded-xl px-4 font-semibold"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
    </motion.div>
  );
};

export default AnimatedModal;
