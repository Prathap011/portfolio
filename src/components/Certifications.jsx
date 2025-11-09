import React from "react";
import { motion } from "framer-motion";
import "../styles/certifications.css";
import {
  FaDatabase,
  FaCode,
  FaCloud,
  FaProjectDiagram,
  FaCalendarCheck,
  FaComments,
} from "react-icons/fa";
import GlassIcons from "../animations/GlassIcons";
import GradientText from "../animations/GradientText";
import { IoLogoJavascript } from "react-icons/io";
import { SiBmcsoftware } from "react-icons/si";

const certifications = [
  {
    title: "HTML and CSS",
    file: "/certificates/HTML and CSS certificate.pdf",
    description: "Learned to build responsive layouts using semantic HTML and modern CSS techniques.",
    icon: <FaCode />,
  },
  {
    title: "JavaScript",
    file: "/certificates/Javascript certificate.pdf",
    description: "Gained hands-on experience with ES6+, DOM manipulation, and dynamic interactivity.",
    icon: <FaCloud />,
  },
  {
    title: "Oracle SQL",
    file: "/certificates/Oracle SQL certificate.pdf",
    description: "Mastered SQL fundamentals — writing queries, joins, and managing relational databases.",
    icon: <FaDatabase />,
  },
  {
    title: "Git & GitHub",
    file: "/certificates/Git certificate.pdf",
    description: "Learned version control, branching, merging, and collaboration with GitHub.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Agile Methodologies",
    file: "/certificates/Agile certificate.pdf",
    description: "Understood Scrum, sprint planning, and iterative software development principles.",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Software Engineering",
    file: "/certificates/Software Engineering certificate.pdf",
    description: "Explored software lifecycle, planning, and building scalable applications.",
    icon: <FaComments />,
  },
];

const items = [
  { icon: <FaCode />, color: "purple", label: "Books" },
  { icon: <IoLogoJavascript />, color: "red", label: "Health" },
  { icon: <FaDatabase />, color: "blue", label: "Files" },
  { icon: <FaProjectDiagram />, color: "indigo", label: "Weather" },
  { icon: <FaCalendarCheck />, color: "orange", label: "Notes" },
  { icon: <SiBmcsoftware />, color: "green", label: "Stats" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="about-title"
      >
        Certifications
      </GradientText>

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
            <div className="cert-style">
            <GlassIcons items={[items[i]]} className="custom-class" />
            </div>

            <h3>{cert.title}</h3>
            <p className="cert-desc">{cert.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
