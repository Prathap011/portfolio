import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImage,
  FaEnvelope,
  FaListUl,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState("home");
  const drawerRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
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

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    };
    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerOpen]);

  return (
    <>
      {/* Mobile toggle button (only when drawer is closed) */}
      {!drawerOpen && (
        <div
          className="mobile-menu-icon"
          onClick={() => setDrawerOpen(true)}
        >
          <FaBars />
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="sidebar">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                spy={true}
                activeClass="active"
                className={`nav-link ${selected === item.id ? "active" : ""}`}
                onSetActive={() => setSelected(item.id)}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`mobile-drawer ${drawerOpen ? "open" : ""}`}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                className={`nav-link ${selected === item.id ? "active" : ""}`}
                onClick={() => setDrawerOpen(false)}
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
