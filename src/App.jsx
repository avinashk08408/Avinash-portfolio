import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Certifications from "./components/Certifications/Certifications";
import Resume from "./components/Resume/Resume";
import Activity from "./components/Activity/Activity";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Resume />
        <Activity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
