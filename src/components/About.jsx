import React from "react";
import "../styles/about.css";
import ProfileCard from "../animations/ProfileCard";
import GradientText from '../animations/GradientText';
import { scroller } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="about-section">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="about-title"
      >
        About
      </GradientText>
      <p className="about-subtitle">
        Passionate about crafting efficient, scalable, and user-focused software solutions.
        I enjoy solving complex problems through clean and creative code, bringing ideas
        to life with modern technologies and a strong eye for detail.
      </p>

      <div className="about-container">
        {/* Left - Image */}
        <div className="about-img">
          {/* <img src="/profile.jpeg" alt="About Me" /> */}
          <ProfileCard
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/profile.jpeg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() =>
              scroller.scrollTo("contact", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -50, // adjust if navbar overlaps
              })
            }
          />
        </div>

        {/* Right - Content */}
        <div className="about-content">
          <h3>Software Developer</h3>
          <p className="about-description">
            I’m a software developer with a strong foundation in full-stack development.
            My focus is on writing clean, maintainable code and building responsive,
            high-performance web applications that enhance user experience.
          </p>

          <div className="about-info">
            <ul>
              <li><strong>Birthday:</strong> 11 Aug 2002</li>
              {/* <li><strong>Website:</strong> www.example.com</li> */}
              <li><strong>Phone:</strong> +91-6369969439</li>
              <li><strong>City:</strong> Ammapet, Salem</li>
              <li><strong>Language:</strong> Tamil and English</li>
            </ul>
            <ul>
              <li><strong>Age:</strong> 24</li>
              <li><strong>Degree:</strong> Engineering</li>
              <li><strong>Email:</strong> vjprathap35@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          <p className="about-footer">
            I’m constantly learning and exploring new technologies to stay ahead in the
            ever-evolving tech landscape. My goal is to create digital experiences that are
            functional, elegant, and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
