import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/konnect.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "home", type: "page" },   // 👈 Added Home page link
    { name: "about-page", type: "page" },
    { name: "company-profile", type: "page" },
    { name: "services", type: "section" },
    { name: "jobs", type: "section" },
    { name: "israel", type: "page" },
    { name: "contact", type: "section" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/hero.jpeg" alt="KonnectHRC" className="h-10 w-auto" />
          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-blue-600" : "text-blue-400"
            }`}
          >
            Konnect HRC
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.name === "home" ? (
                <Link to="/" className="relative group">
                  <span className="hover:text-blue-500 transition">Home</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              ) : item.type === "section" ? (
                <a href={`#${item.name}`} className="relative group">
                  <span className="hover:text-blue-500 transition">
                    {item.name.charAt(0).toUpperCase() +
                      item.name.slice(1).replace("-", " ")}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              ) : item.name === "israel" ? (
                <Link to="/israel" className="relative group">
                  <span className="hover:text-blue-500 transition">
                    Employment in Israel
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              ) : item.name === "about-page" ? (
                <Link to="/about" className="relative group">
                  <span className="hover:text-blue-500 transition">About</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              ) : item.name === "company-profile" ? (
                <Link to="/company-profile" className="relative group">
                  <span className="hover:text-blue-500 transition">Company Profile</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              ) : null}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-inherit focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden px-6 py-4 space-y-4 ${
              scrolled ? "bg-white text-gray-800" : "bg-gray-900 text-white"
            }`}
          >
            {menuItems.map((item) =>
              item.name === "home" ? (
                <Link
                  key={item.name}
                  to="/"
                  className="block hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              ) : item.type === "section" ? (
                <a
                  key={item.name}
                  href={`#${item.name}`}
                  className="block hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name.charAt(0).toUpperCase() +
                    item.name.slice(1).replace("-", " ")}
                </a>
              ) : item.name === "israel" ? (
                <Link
                  key={item.name}
                  to="/israel"
                  className="block hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Employment in Israel
                </Link>
              ) : item.name === "about-page" ? (
                <Link
                  key={item.name}
                  to="/about"
                  className="block hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              ) : item.name === "company-profile" ? (
                <Link
                  key={item.name}
                  to="/company-profile"
                  className="block hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Company Profile
                </Link>
              ) : null
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
