// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import SplitText from "../animations/SplitText";
import Particles from "../animations/Particles";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Hero = () => {
  return (
    <section id="home" className="hero">
  {/* Particles as background */}
  <div className="particles-bg">
    <Particles
      particleColors={['#0066cc', '#0066cc']}
      particleCount={500}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

  <div className="hero-content">
    <SplitText
      text="Prathap S"
      className="text-2xl font-semibold text-center"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      I'm{" "}
      <span className="role">
        <Typewriter
          words={[
            "Software Developer",
            "Freelancer",
            "Mobile App Developer",
            "Gamer",
            "Video Editor"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </motion.p>

    {/* Social icons */}
    <div className="social-links">
      <FaXTwitter />
      <FaFacebook />
      <FaInstagram />
      <FaLinkedin />
    </div>
  </div>

  {/* Profile image */}
  <motion.img
    src="/profile.jpeg"
    alt="Profile"
    className="profile-img"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1 }}
  />
</section>

  );
};

export default Hero;
