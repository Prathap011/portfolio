import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <h2>Prathap S</h2>
      <p className="description">
        Passionate Software Developer specializing in building modern web and mobile applications using Python, Flutter, and React.js.
        Always eager to learn and create impactful digital solutions.
      </p>

      <div className="social-icons">
        {/* <a href="mailto:vjprathap35@gmail.com" title="Email"><FaEnvelope /></a> */}
        <a href="https://github.com/Prathap207" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/prathap-s-80667a197" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/prathap_here_" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
        <a href="https://www.facebook.com/share/1W5iQBnvFj/" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebookF /></a>
        <a href="https://x.com/Chillbr79866096" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
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
