import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimatedStars from "./components/AnimatedStars";
import MouseTrailer from "./components/MouseTrailer";
import Navbar from "./components/Navbar";
import TextEffect from "./components/TextEffect";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const App = () => {
  return <MouseTrailer />;
};

export default App;
