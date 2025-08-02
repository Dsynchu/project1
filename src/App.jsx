import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CompanyProfile from "./components/CompanyProfile";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div className="font-sans antialiased">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section (anime.js included inside Hero.jsx) */}
      <Hero />

      {/* About Section */}
      <Reveal>
        <About />
      </Reveal>

      {/* Company Profile Section */}
      <Reveal direction="up">
        <CompanyProfile />
      </Reveal>

      {/* Services Section */}
      <Reveal direction="left">
        <Services />
      </Reveal>

      {/* Jobs Section */}
      <Reveal direction="right">
        <Jobs />
      </Reveal>

      {/* Contact Section */}
      <Reveal direction="up">
        <Contact />
      </Reveal>

      {/* Footer */}
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;
