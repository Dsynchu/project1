export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} KonnectHRC. All rights reserved.</p>
        <div className="space-x-6">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#jobs" className="hover:text-white">Jobs</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        {/* <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200">LinkedIn</a>
          <a href="#" className="hover:text-gray-200">Facebook</a>
          <a href="#" className="hover:text-gray-200">Instagram</a>
        </div> */}
      </div>
    </footer>
  );
}
