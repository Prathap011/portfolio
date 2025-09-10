import React from "react";
import "../styles/skills.css";

const Skills = () => {
  const skills = [
    { name: "Python", level: 95 },
    { name: "Django", level: 90 },
    { name: "FastAPI", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Flutter", level: 75 },
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">
        Proficient in designing, building, and maintaining web and mobile applications
      </p>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
