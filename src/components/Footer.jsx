import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <h2>Prathap S</h2>
      <p className="description">
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
      </p>

      <div className="social-icons">
        <a href="#"><FaTimes /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaSkype /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          Copyright <strong>Alex Smith</strong> All Rights Reserved
        </p>
        <p>
          Designed by <a href="#">BootstrapMade</a> Distributed by <a href="#">ThemeWagon</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
