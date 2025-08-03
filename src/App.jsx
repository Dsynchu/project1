import Navbar from "./components/Navbar"; // 👈 ab ye motion wala navbar hai
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

function App() {
  return (
    // <div className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
    <div className="font-sans antialiased bg-white text-gray-900">

      {/* Navbar (motion wala) */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Reveal>
        <About />
      </Reveal>

      {/* Company Profile Section */}
      <Reveal direction="up" delay={0.2}>
        <CompanyProfile />
      </Reveal>

      {/* Services Section */}
      <Reveal direction="left" delay={0.3}>
        <Services />
      </Reveal>

      {/* Jobs Section */}
      <Reveal direction="right" delay={0.3}>
        <Jobs />
      </Reveal>

      {/* Job Filter Section */}
      <Reveal direction="up" delay={0.2}>
        <JobFilter />
      </Reveal>

      {/* FAQ Section */}
      <Reveal direction="up" delay={0.2}>
        <FAQ />
      </Reveal>

      {/* Blog Section */}
      <Reveal direction="up" delay={0.2}>
        <Blog />
      </Reveal>

      {/* Contact Section */}
      <Reveal direction="up" delay={0.2}>
        <Contact />
      </Reveal>

      {/* Clients Section */}
      <Reveal direction="up" delay={0.2}>
        <Clients />
      </Reveal>

      {/* Testimonials Section */}
      <Reveal direction="up" delay={0.2}>
        <Testimonials />
      </Reveal>

      {/* Newsletter Section */}
      <Reveal direction="up" delay={0.2}>
        <Newsletter />
      </Reveal>

      {/* Footer */}
      <Reveal>
        <Footer />
      </Reveal>

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
