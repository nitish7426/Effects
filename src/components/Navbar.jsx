import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 w-full flex justify-between items-center px-6">
      <h3 className="font-bold text-2xl text-purple-600">note.it</h3>
      <div className="space-x-6 font-medium text-purple-600">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
