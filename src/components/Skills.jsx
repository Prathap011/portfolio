import React, { useEffect, useRef, useState } from "react";
import "../styles/skills.css";
import GradientText from '../animations/GradientText';

const Skills = () => {
  const skills = [
    { name: "Python", level: 80 },
    { name: "React.js", level: 80 },
    { name: "Flutter", level: 60 },
    { name: "SQL", level: 90 },
    { name: "AWS", level: 65 },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect when the Skills section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
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

      {/* Skill Bars */}
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              {/* <span>{skill.level}%</span> */}
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  transition: "width 2s ease"
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
