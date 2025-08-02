import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CompanyProfile from "./components/CompanyProfile";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
        <CompanyProfile />
      <Services />
      <Jobs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
