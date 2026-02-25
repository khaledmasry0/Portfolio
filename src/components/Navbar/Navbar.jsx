import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/Projects", label: "Projects" },
  { path: "/About", label: "About" },
  { path: "/Contact", label: "Contact" },
];

const Navbar = ({ lightMode }) => {
  const [light, setLight] = useState(lightMode);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDarkMode = () => {
    setLight(!light);
    document.body.classList.toggle("light");
    localStorage.setItem("Light Mode", !light);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header className={`navbar_header ${scrolled ? "scrolled" : ""}`}>
      <Container className="navbar_container">
        <NavLink to="/" className="logo" onClick={() => setMobileOpen(false)}>
          <span className="logo_highlight">Kh</span>aled
        </NavLink>

        <nav className="navbar_nav">
          <div className="navbar_links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav_link ${isActive ? "active" : ""}`
                }
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="navbar_actions">
            <button
              className="theme_toggle"
              onClick={handleDarkMode}
              aria-label="Toggle theme"
            >
              <motion.div
                key={light ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon icon={light ? faMoon : faSun} />
              </motion.div>
            </button>

            <a
              href="https://github.com/khaledmasry0"
              className="social_link"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/khaled-elmasry-4b4689255/"
              className="social_link"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <button
              className="mobile_toggle d-lg-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile_menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `mobile_link ${isActive ? "active" : ""}`
                  }
                  end={link.path === "/"}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
