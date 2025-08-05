import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CompanyProfile from "./components/CompanyProfile";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import JobFilter from "./components/JobFilter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Israel from "./components/Israel"; 

// Full page imports
import AboutPage from "./pages/AboutPage"; 
import CompanyProfilePage from "./pages/CompanyProfilePage";
import ServicesPage from "./pages/ServicesPage";   //  Added Services Full Page

function App() {
  return (
    <Router>
      {/* Navbar global hai, har page me show hoga */}
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="font-sans antialiased bg-white text-gray-900">
              <Hero />
              <Reveal>
                <About />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <CompanyProfile />
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <Services />
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <Jobs />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <JobFilter />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <FAQ />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <Blog />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <Contact />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <Clients />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <Testimonials />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <Newsletter />
              </Reveal>
              <Reveal>
                <Footer />
              </Reveal>
              <ScrollToTop />
            </div>
          }
        />

        {/* About Full Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Company Profile Full Page */}
        <Route path="/company-profile" element={<CompanyProfilePage />} />

        {/* Services Full Page  */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Israel Full Page */}
        <Route path="/israel" element={<Israel />} />
      </Routes>
    </Router>
  );
}

export default App;
