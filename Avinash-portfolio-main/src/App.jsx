import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Certifications from "./components/Certifications/Certifications";
import Resume from "./components/Resume/Resume";
import Activity from "./components/Activity/Activity";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".lazy-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lazy-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="quiet-scholar content-edition">
      <Navbar />

      <main>
        {/* Hero appears immediately */}
        <Hero />

        <div className="lazy-section">
          <About />
        </div>

        <div className="lazy-section">
          <Stack />
        </div>

        <div className="lazy-section">
          <Projects />
        </div>

        <div className="lazy-section">
          <Journey />
        </div>

        <div className="lazy-section">
          <Certifications />
        </div>

        <div className="lazy-section">
          <Resume />
        </div>

        <div className="lazy-section">
          <Activity />
        </div>

        <div className="lazy-section">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
