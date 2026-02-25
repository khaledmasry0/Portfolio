import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { About, Contact, Home, Projects } from "./Pages";
import { CursorGlow } from "./components/3d";
import "./App.css";
import { useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div className="page-transition" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/Projects"
          element={
            <motion.div className="page-transition" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/Contact"
          element={
            <motion.div className="page-transition" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/About"
          element={
            <motion.div className="page-transition" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <About />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [light, setlight] = useState(false);
  const [loading, setloading] = useState(true);
  const lightlocal = localStorage.getItem("Light Mode");

  useLayoutEffect(() => {
    if (lightlocal === "true") {
      setlight(true);
      document.body.classList.add("light");
    }
  }, [lightlocal]);

  useEffect(() => {
    const timer = setTimeout(() => setloading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader_cont">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  ) : (
    <Router>
      <CursorGlow />
      <Navbar lightMode={light} />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default App;
