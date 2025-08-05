import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // default English
  const [scrollProgress, setScrollProgress] = useState(0); //  progress state

  useEffect(() => {
    const handleScroll = () => {
      // navbar shadow toggle
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      // progress calculation
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "home", type: "page" },
    { name: "about", type: "page" },
    { name: "company-profile", type: "page" },
    { name: "services", type: "page" },
    { name: "jobs", type: "section" },
    { name: "israel", type: "page" },
    { name: "contact", type: "section" },
  ];

  //  Translations
  const translations = {
    en: {
      home: "Home",
      about: "About",
      company: "Company Profile",
      services: "Services",
      jobs: "Jobs",
      israel: "Employment in Israel",
      contact: "Contact",
    },
    ar: {
      home: "الصفحة الرئيسية",
      about: "معلومات عنا",
      company: "الملف التعريفي للشركة",
      services: "خدمات",
      jobs: "الوظائف",
      israel: "العمل في إسرائيل",
      contact: "اتصل",
    },
  };

  return (
    <>
      {/*  Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
        <div
          className="h-1 bg-blue-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
        }`}
        style={{ marginTop: "4px" }} //  so progress bar visible
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://konnectthrc.com/wp-content/uploads/2023/03/site.png?w=300&h=174" alt="KonnectHRC" className="h-10 w-auto" />
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-blue-600" : "text-blue-400"
              }`}
            >
              Konnect HRC
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium items-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.name === "home" ? (
                  <Link to="/" className="relative group">
                    <span className="hover:text-blue-500 transition">
                      {translations[language].home}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
                ) : item.name === "about" ? (
                  <Link to="/about" className="relative group">
                    <span className="hover:text-blue-500 transition">
                      {translations[language].about}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
                ) : item.name === "company-profile" ? (
                  <Link to="/company-profile" className="relative group">
                    <span className="hover:text-blue-500 transition">
                      {translations[language].company}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
                ) : item.name === "services" ? (
                  <Link to="/services" className="relative group">
                    <span className="hover:text-blue-500 transition">
                      {translations[language].services}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
                ) : item.name === "israel" ? (
                  <Link to="/israel" className="relative group">
                    <span className="hover:text-blue-500 transition">
                      {translations[language].israel}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a href={`#${item.name}`} className="relative group">
                    <span className="hover:text-blue-500 transition">
                      {translations[language][item.name]}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}

            {/*  Language Switcher */}
            <li>
              <button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="ml-6 px-3 py-1 border rounded-md hover:bg-blue-100 transition"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </li>
          </ul>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
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
                    {translations[language].home}
                  </Link>
                ) : item.name === "about" ? (
                  <Link
                    key={item.name}
                    to="/about"
                    className="block hover:text-blue-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {translations[language].about}
                  </Link>
                ) : item.name === "company-profile" ? (
                  <Link
                    key={item.name}
                    to="/company-profile"
                    className="block hover:text-blue-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {translations[language].company}
                  </Link>
                ) : item.name === "services" ? (
                  <Link
                    key={item.name}
                    to="/services"
                    className="block hover:text-blue-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {translations[language].services}
                  </Link>
                ) : item.name === "israel" ? (
                  <Link
                    key={item.name}
                    to="/israel"
                    className="block hover:text-blue-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {translations[language].israel}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={`#${item.name}`}
                    className="block hover:text-blue-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {translations[language][item.name]}
                  </a>
                )
              )}

              {/*  Language Switcher (Mobile) */}
              <button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="w-full px-3 py-2 border rounded-md hover:bg-blue-100 transition"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
