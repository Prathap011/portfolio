import React from "react";
import "../styles/about.css";
import ProfileCard from "../animations/ProfileCard";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About</h2>
      <p className="about-subtitle">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
        fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
        Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
        quidem hic quas.
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
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

        {/* Right - Content */}
        <div className="about-content">
          <h3>Web Developer.</h3>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="about-info">
            <ul>
              <li><strong>Birthday:</strong> 1 May 1995</li>
              <li><strong>Website:</strong> www.example.com</li>
              <li><strong>Phone:</strong> +123 456 7890</li>
              <li><strong>City:</strong> New York, USA</li>
            </ul>
            <ul>
              <li><strong>Age:</strong> 30</li>
              <li><strong>Degree:</strong> Master</li>
              <li><strong>Email:</strong> email@example.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          <p className="about-footer">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam
            sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.
            Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur
            qui quia repellendus itaque neque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
