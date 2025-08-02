import { useState } from "react";
import logo from "../assets/konnect.webp";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Konnect Talent HR Consultancy" className="w-12 h-12" />
          <h1 className="text-xl md:text-2xl font-bold text-blue-600">
            Konnect Talent <br /> 
            <span className="text-gray-700">HR Consultancy</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#company-profile" className="hover:text-blue-600">Company</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#jobs" className="hover:text-blue-600">Jobs</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#about" className="block">About</a>
          <a href="#company-profile" className="block">Company</a>
          <a href="#services" className="block">Services</a>
          <a href="#jobs" className="block">Jobs</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
