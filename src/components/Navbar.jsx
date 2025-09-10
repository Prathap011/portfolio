import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImage,
  FaEnvelope,
  FaListUl,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "skills", label: "About", icon: <FaUser /> },
    { id: "resume", label: "Resume", icon: <FaFileAlt /> },
    { id: "education", label: "Portfolio", icon: <FaImage /> },
    { id: "certifications", label: "Certificates", icon: <FaListUl /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile toggle button */}
      <div
        className="mobile-menu-icon"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        {drawerOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Sidebar */}
      <nav className="sidebar">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                className={`nav-link ${selected === item.id ? "active" : ""}`}
                onClick={() => setSelected(item.id)}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                className={`nav-link ${selected === item.id ? "active" : ""}`}
                onClick={() => {
                  setSelected(item.id);
                  setDrawerOpen(false);
                }}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
