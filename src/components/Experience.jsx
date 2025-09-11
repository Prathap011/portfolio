import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

const EducationExperience = () => {
  const education = [
    {
      degree: "Electronics and Communication Engineering",
      school: "Knowledge Institute Of Technology",
      period: "Sep 2018 - May 2022",
      score: "CGPA – 8.41"
    },
    {
      degree: "Higher Secondary School (HSC)",
      school: "Sri Sarada Balamandir Boys Matriculation School",
      period: "Jun 2018 - May 2019",
      score: "77%"
    },
    {
      degree: "SSLC",
      school: "Balagurukulam Matriculation School",
      period: "Jun 2016 - Mar 2017",
      score: "93%"
    }
  ];

  const experience = [
    {
      role: "Backend Developer",
      company: "Gohawk Application",
      period: "Aug 2025 – Present",
      points: [
        "Developed REST APIs with FastAPI",
        "Built live product demo with video calls",
        "Integrated secure checkout",
        "Improved DB queries by 20%",
        "Implemented JWT authentication"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "JustPlay",
      period: "Nov 2024 – Jun 2025",
      points: [
        "Developed turf booking app with Flutter",
        "Built backend APIs with FastAPI",
        "Optimized SQL queries",
        "Improved system stability"
      ]
    },
    {
      role: "Software Developer",
      company: "Job Portal",
      period: "Dec 2023 – Feb 2024",
      points: [
        "Developed job portal with Django & React",
        "Implemented search and filter",
        "Secured with JWT authentication",
        "Deployed on AWS with CI/CD"
      ]
    }
  ];

  const certifications = [
    "Oracle SQL - Udemy (Mar 2023)",
    "HTML, CSS, JavaScript & Bootstrap - Udemy (Mar 2023)",
    "AWS Academy Cloud Foundations (May 2022)"
  ];

   return (
    <section id="resume">
    <div className="resume-container">
      {/* LEFT: summary + education in one continuous timeline */}
      <div className="left-column">
        <h2 className="section-heading">Summary</h2>

        <div className="timeline">
          {/* Summary as a timeline item */}
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="summary-text">
                Innovative and deadline-driven Software Developer with 3+ years of
                experience designing and developing user-centered digital
                applications from initial concept to final, polished deliverable.
              </p>
              <ul className="contact-list">
                <li><i className="fa fa-map-marker" aria-hidden="true"></i> Portland par 127, Orlando, FL</li>
                <li><i className="fa fa-phone" aria-hidden="true"></i> (123) 456-7891</li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i> alice.barkley@example.com</li>
              </ul>
            </div>
          </motion.div>

          {/* Education heading inside same timeline so the line continues */}
          <h2 className="section-heading">Education</h2>

          {education.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item timeline-item2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <p className="period"><i>{item.period}</i></p>
                <p className="school"><em>{item.school}</em></p>
                <p className="score">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT: experience timeline */}
      <div className="right-column">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="timeline-item timeline-item2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{job.role} - {job.company}</h3>
                <p className="period"><i>{job.period}</i></p>
                <ul>
                  {job.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default EducationExperience;