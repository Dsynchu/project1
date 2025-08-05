import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mohammed Al Rashid",
    role: "Business Consultant, Dubai",
    feedback:
      "KonnectHRC guided me in hiring top professionals quickly and efficiently. Their process is world-class.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Fatima Al Mansoori",
    role: "HR Director, Abu Dhabi",
    feedback:
      "We trust KonnectHRC for critical recruitment needs. Their professionalism and speed is unmatched in the UAE market.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Omar Bin Khalid",
    role: "Entrepreneur, Sharjah",
    feedback:
      "Thanks to KonnectHRC, we built a strong workforce in record time. Highly recommend them to any growing business.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Aisha Al Qasimi",
    role: "Marketing Head, Dubai",
    feedback:
      "Their HR services are innovative and highly reliable. It feels like working with a true partner.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Khalid Al Maktoum",
    role: "Construction Manager, Dubai",
    feedback:
      "KonnectHRC helped us with mass hiring for a big project. Excellent quality candidates every time.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Noura Al Suwaidi",
    role: "Finance Manager, Abu Dhabi",
    feedback:
      "Professional, fast, and transparent. They truly understand UAE’s recruitment landscape.",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    name: "Hassan Bin Zayed",
    role: "Operations Head, Sharjah",
    feedback:
      "We rely on KonnectHRC for specialized roles. Their network in the GCC is impressive.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Layla Al Marri",
    role: "Project Manager, Dubai",
    feedback:
      "The process was smooth, efficient, and stress-free. I would definitely recommend them.",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
  },
  {
    name: "Abdullah Al Nuaimi",
    role: "HR Business Partner, Abu Dhabi",
    feedback:
      "Their recruitment solutions are reliable, and they saved us significant hiring time.",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Sara Al Habtoor",
    role: "Tech Recruiter, Dubai",
    feedback:
      "The best consultancy for tech hiring in the UAE. Extremely professional and effective.",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    name: "Yusuf Al Ghurair",
    role: "Investor, Dubai",
    feedback:
      "Strongly recommend KonnectHRC. Their guidance and network is unmatched in Dubai.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Maryam Al Fardan",
    role: "Talent Acquisition, Dubai",
    feedback:
      "Always responsive and committed. They make recruitment seamless and stress-free.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Show 3 testimonials per slide
  const perPage = 3;
  const totalSlides = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 6000); // 6 sec delay
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentTestimonials = testimonials.slice(
    index * perPage,
    index * perPage + perPage
  );

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Voices From <span className="text-blue-600">Dubai & UAE</span>
        </motion.h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Professionals and leaders across{" "}
          <span className="font-semibold text-blue-600">Dubai, Abu Dhabi & GCC</span>{" "}
          trust <span className="font-semibold text-blue-600">KonnectHRC</span>.
        </p>

        {/* Carousel */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/80 backdrop-blur-lg relative p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition"
            >
              <div className="absolute -top-6 left-6 text-blue-200 text-7xl font-serif select-none">
                “
              </div>
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 shadow-md"
              />
              <p className="text-gray-700 italic mb-6 leading-relaxed">{t.feedback}</p>
              <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
              <p className="text-sm text-blue-600 font-medium">{t.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-16 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
}
