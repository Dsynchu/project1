import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    "Job design & candidate profiling",
    "Interviewing & short‑listing",
    "Pre‑employment checks & references",
    "Allocate right candidate to right job",
    "Improve hiring quality & reduce cost",
  ];
  const sectors = [
    "Industrial & Engineering",
    "IT & Telecom",
    "Media & Pharma",
    "Education & FMCG",
    "Security & Real Estate",
    "Retail & Supply Chain",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              We deliver professional HR consultancy and recruitment services
              across industries. Our approach ensures efficiency, quality, and
              cost-effectiveness in talent acquisition.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {services.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Industries We Serve
            </h3>
            <ul className="flex flex-wrap gap-3">
              {sectors.map((sec, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm"
                >
                  {sec}
                </span>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="HR Services"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}
