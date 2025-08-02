import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold ${
            scrolled ? "text-blue-600" : "text-blue-400"
          }`}
        >
          Konnect HRC
        </h1>
        <ul className="flex space-x-6 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#company-profile" className="hover:text-blue-500">
              Profile
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#jobs" className="hover:text-blue-500">
              Jobs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
