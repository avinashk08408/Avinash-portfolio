import { Route, Switch } from "wouter";

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

import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <div className="quiet-scholar content-edition">

      <Switch>

        {/* ALL PROJECTS PAGE */}
        <Route path="/projects">
          <ProjectsPage />
        </Route>

        {/* MAIN PORTFOLIO */}
        <Route>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Stack />
            <Projects />
            <Journey />
            <Certifications />
            <Resume />
            <Activity />
            <Contact />
          </main>

          <Footer />
        </Route>

      </Switch>

    </div>
  );
}
