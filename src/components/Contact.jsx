import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠ Please fill in all required fields.");
      return false;
    }
    // Simple email regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus("⚠ Enter a valid email address.");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .send(
        "your_service_id", // from EmailJS
        "your_template_id",
        formData,
        "your_user_id"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="subtitle">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="contact-container">
        {/* Left Column - Info */}
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-box">
            <i><FaMapMarkerAlt /></i>
            <div>
              <h4>Address</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="info-box">
            <i><FaPhoneAlt /></i>
            <div>
              <h4>Call Us</h4>
              <p>+91-6369969439</p>
            </div>
          </div>

          <div className="info-box">
            <i><FaEnvelope /></i>
            <div>
              <h4>Email Us</h4>
              <p>vjprathap35@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
          {status && <p className="status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
