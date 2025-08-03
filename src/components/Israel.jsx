import { motion } from "framer-motion";

export default function Israel() {
  return (
    <section id="israel" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Employment in Israel
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto"
        >
          We are proud to collaborate with trusted partners in Israel, offering
          employment opportunities across diverse industries. Our focus is on
          providing genuine jobs, safe migration, and career growth for
          candidates.
        </motion.p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1596003906949-67221c37965f"
            alt="Israel Jobs"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Why Israel?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Israel offers rewarding employment opportunities in construction,
              agriculture, caregiving, and high-demand skilled trades. With fair
              wages and legal protections, workers can achieve both financial
              security and professional growth.
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Role
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Konnect HRC ensures a transparent recruitment process, proper
              documentation, and ongoing support for candidates who choose to
              work in Israel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
