import React from "react";
import { motion } from "framer-motion";
import "../styles/education.css";

const Education = () => {
  const edu = [
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

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      {edu.map((item, i) => (
        <motion.div
          key={i}
          className="edu-card"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <h3>{item.degree}</h3>
          <p>{item.school}</p>
          <p><i>{item.period}</i></p>
          <p>{item.score}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;


// import React from "react";
// import "../styles/experience.css";

// const Experience = () => {
//   const jobs = [
//     {
//       role: "Backend Developer",
//       company: "Gohawk Application",
//       period: "Aug 2025 – Present",
//       points: [
//         "Developed REST APIs with FastAPI",
//         "Built live product demo with video calls",
//         "Integrated secure checkout",
//         "Improved DB queries by 20%",
//         "Implemented JWT authentication"
//       ]
//     },
//     {
//       role: "Full Stack Developer",
//       company: "JustPlay",
//       period: "Nov 2024 – Jun 2025",
//       points: [
//         "Developed turf booking app with Flutter",
//         "Built backend APIs with FastAPI",
//         "Optimized SQL queries",
//         "Improved system stability"
//       ]
//     },
//     {
//       role: "Software Developer",
//       company: "Job Portal",
//       period: "Dec 2023 – Feb 2024",
//       points: [
//         "Developed job portal with Django & React",
//         "Implemented search and filter",
//         "Secured with JWT authentication",
//         "Deployed on AWS with CI/CD"
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="section">
//       <h2>Professional Experience</h2>
//       {jobs.map((job, i) => (
//         <div key={i} className="job-card">
//           <h3>{job.role} - {job.company}</h3>
//           <p><i>{job.period}</i></p>
//           <ul>
//             {job.points.map((point, idx) => <li key={idx}>{point}</li>)}
//           </ul>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Experience;
