import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Sidebar from "./Sidebar";
const OpenSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="h-[200vh] flex justify-center py-12 items-start">
      <Button text={"Open Sidebar"} onClick={() => setIsOpen(true)} />
      <AnimatePresence>
        {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default OpenSidebar;
