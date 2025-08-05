import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 animate-gradient-x"
      style={{
        background:
          "linear-gradient(135deg, #e0f2fe, #ede9fe, #fce7f3, #fef9c3)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 drop-shadow">
          📬 Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
          Have questions or want to work with us? Reach out through the form or
          connect directly using our contact details below.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-blue-600" />,
                title: "Our Office",
                value: "Guwahati, Assam, India",
              },
              {
                icon: <Mail className="w-6 h-6 text-blue-600" />,
                title: "Email Us",
                value: "info@konnecthrc.com",
              },
              {
                icon: <Phone className="w-6 h-6 text-blue-600" />,
                title: "Call Us",
                value: "+91 98765 43210",
              },
              {
                icon: <Clock className="w-6 h-6 text-blue-600" />,
                title: "Working Hours",
                value: "Mon – Sat: 9:00 AM – 7:00 PM",
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-600" />,
                title: "Website",
                value: "www.konnecthrc.com",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-xl transition border border-transparent hover:border-blue-300"
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border border-gray-200 hover:shadow-2xl transition">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
            >
              Send Message 
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
