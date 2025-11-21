import React from "react";
import "../styles/skills.css";
import GradientText from '../animations/GradientText';
import ProgressLine from "./ProgressLine";

const Skills = () => {
  const skills = [
    { name: "Python", level: 80 },
    { name: "React.js", level: 80 },
    { name: "Flutter", level: 60 },
    { name: "SQL", level: 90 },
    { name: "AWS", level: 65 },
  ];

  return (
    <section id="skills" className="skills-section">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="about-title"
      >
        Skills
      </GradientText>
      <p className="skills-subtitle">
        Proficient in designing, building, and maintaining web and mobile applications
      </p>
      <ProgressLine
        label="Full progressbar"
        visualParts={[
          {
            percentage: "100%",
            color: "tan"
          }
        ]}
      />

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

