import { motion } from "framer-motion";
import "../styles/portfolio.css";
import React from "react";
import GradientText from '../animations/GradientText';

const portfolioData = [
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    image: "/justplay.png",
    link: "https://example.com/product1",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Creative branding",
    image: "/justplay.png",
    link: "https://example.com/product2",
  },
  {
    id: 3,
    title: "Product 3",
    description: "UI/UX project",
    image: "/justplay.png",
    link: "https://example.com/product3",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Design inspiration",
    image: "/justplay.png",
    link: "https://example.com/product4",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Modern web app",
    image: "/justplay.png",
    link: "https://example.com/product5",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 }, // stagger animation
  }),
};

export default function Portfolio() {
  return (
      <section className="portfolio-section">
         <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="about-title"
                    >
                      Portfolio
                    </GradientText>
        <p className="portfolio-subtitle">
          Some of my recent works with creative ideas and modern design.
        </p>

        <div className="portfolio-grid">
  {portfolioData.map((item, index) => (
    <motion.a
      key={item.id}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`portfolio-card ${index === 0 ? "tall-card" : ""}`} // first one taller
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <img src={item.image} alt={item.title} className="portfolio-image" />

      {/* Hover content */}
      <div className="portfolio-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="portfolio-icons">
          <span>🔍</span>
          <span>🔗</span>
        </div>
      </div>
    </motion.a>
  ))}
</div>

      </section>
  );
}
