import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer",
    feedback:
      "KonnectHRC helped me land my dream job in just 2 weeks. The process was smooth and professional.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "HR Manager",
    feedback:
      "Their recruitment solutions saved us time and brought us highly skilled candidates.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Patel",
    role: "Business Owner",
    feedback:
      "We trust KonnectHRC for all our hiring needs. They truly understand the talent market.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Trusted by professionals and businesses worldwide. Here's what they
          think about <span className="font-semibold text-blue-600">KonnectHRC</span>.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="bg-white relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-6 text-blue-200 text-7xl font-serif select-none">
                “
              </div>

              {/* Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 shadow-md"
              />

              {/* Feedback */}
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                {t.feedback}
              </p>

              {/* Name + Role */}
              <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-blue-600 font-medium">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
}
