import { motion } from "framer-motion";

export default function CompanyProfilePage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Company Profile
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-16"
        >
          Konnect Talent HR Consultancy is headquartered in Dubai, UAE, and has
          established itself as a pioneer in HR solutions and recruitment across
          industries. We deliver excellence by connecting global talent with
          companies that value growth, culture, and innovation.
        </motion.p>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Office"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              With years of expertise, we connect companies with exceptional
              talent and ensure candidates find roles that match their skills
              and aspirations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our global network allows us to cater to industries like
              construction, IT, healthcare, education, hospitality, and more.
            </p>
          </motion.div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { number: "15+", label: "Years of Excellence" },
            { number: "100+", label: "Clients Served" },
            { number: "5000+", label: "Successful Placements" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Office Info */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Office
          </h3>
          <p className="text-gray-600 mb-2">
            <strong>Location:</strong> Abu Saif Business Center, Office No M35,
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

        {/* Our Approach */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-10">
            Our Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Tailored recruitment solutions to fit business needs.",
              "Transparency in every process and documentation.",
              "Commitment to long-term partnerships and growth.",
            ].map((point, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow text-gray-600"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {point}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
