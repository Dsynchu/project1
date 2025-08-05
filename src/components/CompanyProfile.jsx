import { motion } from "framer-motion";

export default function CompanyProfileSection() {
  return (
    <section
      id="company-profile"
      className="relative py-20 animate-gradient-x"
      style={{
        background:
          "linear-gradient(135deg, #e0f2fe, #e9d5ff, #dbeafe, #f0fdfa)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Subtle white overlay for text readability */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12"
        >
          Company <span className="text-indigo-600">Profile</span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Office teamwork"
            className="rounded-2xl shadow-2xl border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-indigo-600">
                Konnect Talent Human Resource Consultancy
              </span>{" "}
              is a pioneer in delivering HR solutions globally, led by experienced
              HR professionals and headquartered in{" "}
              <span className="font-medium">Dubai, UAE</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With years of expertise, we connect companies with exceptional
              talent and ensure candidates find roles that match their skills and
              aspirations. Our approach is client‑centric, transparent, and
              growth‑focused.
            </p>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-2xl transition"
            >
              <p className="text-gray-700 mb-3">
                <strong className="text-indigo-600">Office:</strong> Abu Saif Business Center,
                Office No M35, Near Al Qiyadah Metro, Dubai
              </p>
              <p className="text-gray-700">
                <strong className="text-indigo-600">Contact:</strong> +971 56 277 8484 |{" "}
                <a
                  href="mailto:info@konnectthrc.com"
                  className="text-indigo-600 hover:underline"
                >
                  info@konnectthrc.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
