import { motion } from "framer-motion";

export default function CompanyProfileSection() {
  return (
    <section id="company-profile" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Company Profile
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Office teamwork"
            className="rounded-2xl shadow-lg"
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
            <p className="text-gray-600 leading-relaxed mb-4">
              Konnect Talent Human Resource Consultancy is a pioneer in
              delivering HR solutions globally, led by experienced HR
              professionals and based in Dubai, UAE.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With years of expertise, we connect companies with exceptional
              talent and ensure candidates find roles that match their skills
              and aspirations.
            </p>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm rounded-xl p-6 mt-6"
            >
              <p className="text-gray-600 mb-3">
                <strong>Office:</strong> Abu Saif Business Center, Office No M35,
                Near Al Qiyadah Metro, Dubai
              </p>
              <p className="text-gray-600">
                <strong>Contact:</strong> +971 56 277 8484 |{" "}
                <a
                  href="mailto:info@konnectthrc.com"
                  className="text-blue-600 hover:underline"
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
