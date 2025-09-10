// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/hero.css";

// const Hero = () => {
//   return (
//     <section id="home" className="hero">
//       <motion.img 
//         src="/profile.jpeg" 
//         alt="Profile" 
//         className="profile-img"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//       />
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1>Hi, I'm <span className="highlight">Prathap S</span></h1>
//         <p>
//           Software Developer with 2 years of experience in designing, developing, 
//           and maintaining web applications. Proficient in Python, Django, FastAPI, 
//           and SQL. Skilled in Flutter for mobile development. Adept at problem-solving, 
//           debugging, and collaborating with cross-functional teams.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="highlight">Prathap S</span>
        </motion.h1>

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
