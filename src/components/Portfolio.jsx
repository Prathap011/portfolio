import { motion } from "framer-motion";
import "../styles/portfolio.css";
import React from "react";
import GradientText from '../animations/GradientText';

const portfolioData = [
  {
    id: 1,
    title: "JustPlay",
    description: "Vendor can register the turf and buyer can book their turf",
    image: "/justplay.png",
    link: "https://ttdc.skeintech.com:4411/",
  },
  {
    id: 2,
    title: "Gohawq Admin",
    description: "He can manage the vendor account and help the vendor support",
    image: "/admin1.png",
    link: "https://admin.dev.gohawq.com/",
  },
  {
    id: 3,
    title: "Gohawq Vendor",
    description: "He can register the sale of products, do live sales, manage orders, and chat with buyers",
    image: "/vendor1.png",
    link: "https://vendor.dev.gohawq.com/",
  },
  {
    id: 4,
    title: "Gohawq Buyer",
    description: "He can sign up, purchase products online, and chat with vendors",
    image: "/buyer1.png",
    link: "https://buyer.dev.gohawq.com/",
  },
  {
    id: 5,
    title: "PracticeTime",
    description: "Parent can sign up and attend the quiz to increase child intelligence",
    image: "/practicetime.png",
    link: "https://example.com/product1",
  },
  {
    id: 6,
    title: "ProductTime Admin",
    description: "Admin can upload questions and modify questions and child quiz details",
    image: "/practicetimeadmin.png",
    link: "https://example.com/product1",
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
            // className={`portfolio-card ${index === 0 ? "tall-card" : ""}`} 
            className={`portfolio-card`} 
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
                {/* <span>🔍</span>
                <span>🔗</span> */}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

    </section>
  );
}
