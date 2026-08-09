import { LightboxProvider } from "./context/LightboxContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import CaseStudies from "./components/CaseStudies";
import MoreProjects from "./components/MoreProjects";
import Experiments from "./components/Experiments";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Recognition from "./components/Recognition";
import TicTacToe from "./components/TicTacToe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LightboxOverlay from "./components/LightboxOverlay";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <LightboxProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
        <Intro />
        <CaseStudies />
        <MoreProjects />
        <Experiments />
        <Stack />
        <Experience />
        <Recognition />
        <TicTacToe />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <LightboxOverlay />
    </LightboxProvider>
  );
}
