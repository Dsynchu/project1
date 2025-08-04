import { motion } from "framer-motion";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function ServicesPage() {
  const extraServices = [
    {
      title: "Executive Search",
      desc: "Finding the right leadership talent for critical roles in organizations, ensuring long-term success.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      title: "Global Recruitment",
      desc: "Connecting talent across borders, ensuring international companies get access to skilled professionals.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
    {
      title: "HR Outsourcing",
      desc: "Providing end-to-end HR solutions so businesses can focus on growth while we manage their workforce.",
      img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a0",
    },
  ];

  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      {/* Services Component (original) */}
      <Services />

      {/* ✨ Extra Detailed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            More of Our Expertise
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {extraServices.map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
              >
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {srv.title}
                </h3>
                <p className="text-gray-600">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Transform Your Hiring?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Let us handle your recruitment challenges while you focus on your
          business growth. Partner with KonnectHRC today!
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
