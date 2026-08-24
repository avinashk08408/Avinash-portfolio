/** Quiet Scholar component composition entry. */
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><div className="quiet-scholar content-edition"><Navbar /><main><Hero /><About /><Stack /><Projects /><Journey /><Certifications /><Resume /><Activity /><Contact /></main><Footer /></div></ThemeProvider></ErrorBoundary>;
}

