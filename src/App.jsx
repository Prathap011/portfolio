    import Navbar from "./components/Navbar";
    import Hero from "./components/Hero";
    import Skills from "./components/Skills";
    import Experience from "./components/Experience";
    // import Education from "./components/Education";
    import Certifications from "./components/Certifications";
    import Contact from "./components/Contact";
    import Footer from "./components/Footer";
    import "./styles.css";
    import React from 'react';
import About from "./components/About";

    function App() {
    return (
        <div>
        <Navbar />
        <Hero />
         <About />
        <Skills />
        {/* <Experience /> */}
        {/* <Certifications /> */}
        {/* <Contact /> */}
        <Footer /> 
        </div>
    );
    }

    export default App;
        {/* <Education /> */}
