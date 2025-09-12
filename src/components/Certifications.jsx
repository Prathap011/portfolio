import React from "react";
import { motion } from "framer-motion";
import "../styles/certifications.css";
import { 
  FaDatabase, 
  FaCode, 
  FaCloud, 
  FaProjectDiagram, 
  FaCalendarCheck, 
  FaComments 
} from "react-icons/fa";
import GlassIcons from "../animations/GlassIcons";

const certifications = [
  {
    title: "Oracle SQL - Udemy",
    file: "/certs/cert1.pdf",
    icon: <FaDatabase />
  },
  {
    title: "HTML, CSS, JavaScript - Udemy",
    file: "/certs/cert2.pdf",
    icon: <FaCode />
  },
  {
    title: "AWS Cloud Foundations",
    file: "/certs/cert3.pdf",
    icon: <FaCloud />
  },
  {
    title: "Git & GitHub",
    file: "/certs/cert4.pdf",
    icon: <FaProjectDiagram />
  },
  {
    title: "Agile Methodologies",
    file: "/certs/cert5.pdf",
    icon: <FaCalendarCheck />
  },
  {
    title: "Communication Skills",
    file: "/certs/cert6.pdf",
    icon: <FaComments />
  }
];

// One-to-one items (matches with certifications by index)
const items = [
  { icon: <FaDatabase />, color: 'blue', label: 'Files' },
  { icon: <FaCode />, color: 'purple', label: 'Books' },
  { icon: <FaCloud />, color: 'red', label: 'Health' },
  { icon: <FaProjectDiagram />, color: 'indigo', label: 'Weather' },
  { icon: <FaCalendarCheck />, color: 'orange', label: 'Notes' },
  { icon: <FaComments />, color: 'green', label: 'Stats' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.file}
            download
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* GlassIcons for each card */}
            <GlassIcons items={[items[i]]} className="custom-class" />

            <h3>{cert.title}</h3>
            <p>Click to download certificate</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
