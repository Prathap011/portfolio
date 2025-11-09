import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

const EducationExperience = () => {
  const education = [
    {
      degree: "Electronics and Communication Engineering",
      school: "Knowledge Institute Of Technology",
      period: "Jul 2018 - May 2022",
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
   const job = [
    {
      role: "Software Developer",
      company: "JustLogix Infotech Private Limited",
      period: "Oct 2023 – Ongoing",
      points: [
        "Gaining hands-on experience in full-stack development using Python (FastAPI, Django), React.js, and databases like MySQL and PostgreSQL, including building and deploying scalable web applications on AWS.",
        "Developing RESTful APIs, integrating front-end and back-end systems, and improving code quality through unit testing, Git/GitHub, and Agile collaboration on real-time projects."
      ]
    }
  ];

  const experience = [
    {
      role: "Python (FastAPI)",
      company: "Gohawk Application",
      period: "Aug 2025 – Present",
      points: [
        "Built an e-commerce platform enabling buyers, vendors, and admins to interact, allowing buyers to purchase products and track orders seamlessly. Vendors can showcase products through live video demos, and buyers can purchase directly during live calls with secure checkout and authentication.",
        "Integrated a vendor chatbot powered by a pretrained model to assist with product uploads and management.",
        "Implemented OpenAI’s pretrained image detection API to automatically validate and categorize product images."
      ]
    },
    {
      role: "Python (FastAPI), Flutter",
      company: "JustPlay",
      period: "Nov 2024 – Jun 2025",
      points: [
        "Developed a turf booking platform with roles for buyers, turf owners, and admins, enabling turf owners to register and manage turf details while buyers can book turfs through the website and mobile app.",
        "Built the buyer mobile application using Flutter for Android and iOS, and implemented backend APIs with FastAPI for authentication, bookings, payments, and schedule management.",
        "Optimized SQL queries for real-time availability checks and improved system performance while contributing to Agile sprint planning and debugging activities.",
      ]
    },
    {
      role: "Python (Django), React js",
      company: "Job Portal",
      period: "Dec 2023 – Feb 2024",
      points: [
        "Developed a job portal application connecting recruiters and job seekers.",
        "Built modules for job posting, candidate profiles, and resume uploads with advanced search and filter features. ",
        "Secured the platform using JWT authentication and role-based access control."
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
          <h2 className="section-heading">Professional Summary</h2>

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
                  Full Stack Developer with hands-on experience in React.js, Python, and SQL. Built multiple end-to-end projects featuring API integration, responsive UI design, and database management. Quick to learn, adaptive to modern tech stacks, and eager to take on real-world challenges in full stack development.
                </p>
                {/* <ul className="contact-list">
                  <li><i className="fa fa-map-marker" aria-hidden="true"></i> Portland par 127, Orlando, FL</li>
                  <li><i className="fa fa-phone" aria-hidden="true"></i> (123) 456-7891</li>
                  <li><i className="fa fa-envelope" aria-hidden="true"></i> alice.barkley@example.com</li>
                </ul> */}
              </div>
            </motion.div>

            

            {/* Summary as a timeline item */}
<div className="left-column">
         <h2 className="section-heading">Professional Experience</h2>

          <div className="timeline">
            {job.map((job, i) => (
              <motion.div
                key={i}
                className="timeline-item timeline-item2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{job.company} - {job.role}</h3>
                  <p className="period"><i>{job.period}</i></p>
                  <ul>
                    {job.points.map((p, idx) => <li key={idx}>{p}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
                  <p className="school"><em>{item.school}</em> - {item.score}</p>
                  {/* <p className="score">{item.score}</p> */}
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>

        {/* RIGHT: experience timeline */}
        <div className="right-column">
          <h2 className="section-heading">Projects</h2>

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
                  <h3>{job.company} - {job.role}</h3>
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