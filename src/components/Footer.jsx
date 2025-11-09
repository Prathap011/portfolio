import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <h2>Prathap S</h2>
      <p className="description">
        Passionate Software Developer specializing in building modern web and mobile applications using Python, FastAPI, and React.js.
        Always eager to learn and create impactful digital solutions.
      </p>

      <div className="social-icons">
        <a href="mailto:prathap@example.com" title="Email"><FaEnvelope /></a>
        <a href="https://github.com/prathaps" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/prathaps" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/prathaps" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
        <a href="https://www.facebook.com/prathaps" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebookF /></a>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2025 <strong>Prathap S</strong> — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
