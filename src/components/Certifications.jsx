// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/certifications.css";

// const Certifications = () => {
//   const certs = [
//     "Oracle SQL - Udemy (Mar 2023)",
//     "HTML, CSS, JavaScript & Bootstrap - Udemy (Mar 2023)",
//     "AWS Academy Cloud Foundations (May 2022)"
//   ];

//   return (
//     <section id="certifications" className="section">
//       <h2>Certifications</h2>
//       <ul>
//         {certs.map((cert, i) => (
//           <motion.li
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//           >
//             {cert}
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Certifications;

import React from "react";
import { motion } from "framer-motion";
import "../styles/certifications.css";
import { FaDatabase, FaCode, FaCloud, FaProjectDiagram, FaCalendarCheck, FaComments } from "react-icons/fa";

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
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <p>Click to download certificate</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
