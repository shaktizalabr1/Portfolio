import { Analytics } from "@vercel/analytics/react";

import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import PageBackground from "./components/layout/PageBackground";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import CursorGlow from "./components/effects/CursorGlow";
import ScrollProgress from "./components/effects/ScrollProgress";
import SmoothScroll from "./components/effects/SmoothScroll";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Certifications from "./components/certification/Certifications";
import Highlights from "./components/highlights/Highlights";
import GitHubDashboard from "./components/github/GitHubDashboard";
import Contact from "./components/contact/Contact";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import SEO from "./components/seo/SEO";

function App() {
  return (
    <>
      
      <PageBackground />

      <Loader />

      <SmoothScroll/>
      <SEO />
      <ScrollProgress />
      <CursorGlow />
      
      <Navbar />

      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Certifications />
      <Highlights/>
      {/* <GitHubDashboard/> */}
      <Contact />
      <CTA />
      <Footer/>
      
      <Analytics />
    </>
  );
}

export default App;