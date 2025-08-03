import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top: Thank You + Social Icons */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center border-b border-gray-700">
        <p className="text-xl mb-8">
          Thank you for visiting us! We hope to connect again in the future 
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:bg-blue-600 hover:text-white transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:bg-pink-500 hover:text-white transition"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>

      {/* Bottom: Links + Copyright */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} KonnectHRC. All rights reserved.</p>

        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#jobs" className="hover:text-white">Jobs</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
