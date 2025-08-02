import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600">
              We’d love to hear from you. Reach out for business inquiries,
              career opportunities, or partnerships.
            </p>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span>Guwahati, Assam, India</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>info@konnecthrc.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <form className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300" required />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300" required />
            <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-gray-300" required></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
