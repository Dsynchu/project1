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
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
