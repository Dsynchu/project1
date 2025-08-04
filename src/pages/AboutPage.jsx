import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-gray-800 mb-12"
        >
          About Us
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-16"
        >
          Konnect Talent HR Consultancy is a trusted name in HR solutions,
          recruitment, and talent acquisition. With over a decade of expertise,
          we bridge the gap between companies and professionals across the globe.
          Our mission is to empower businesses with the right people and help
          individuals find opportunities that shape their careers.
        </motion.p>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team Work"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a global HR consultancy based in Dubai, providing recruitment,
              staffing, and HR advisory services to clients worldwide. With a
              strong commitment to integrity and excellence, we ensure that
              companies find the best talent while individuals discover fulfilling
              career paths.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team consists of experienced HR professionals who are passionate
              about connecting talent with opportunities. We operate with
              transparency and build long-term partnerships.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading HR consultancy globally, delivering impactful
              solutions that create meaningful connections between people and
              businesses.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver HR solutions that are transparent, efficient, and
              sustainable while ensuring growth for both clients and candidates.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-10">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Integrity", "Transparency", "Commitment"].map((val, i) => (
              <motion.div
                key={i}
                className="bg-white border rounded-xl shadow p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-2">{val}</h4>
                <p className="text-gray-600">
                  {val} is at the core of everything we do. It drives our
                  decisions, builds trust, and ensures lasting partnerships.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CEO Message */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/images/ceo.jpg"
            alt="CEO"
            className="w-72 h-80 object-cover rounded-2xl shadow-lg mx-auto"
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
              CEO’s Message
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              At <span className="font-bold text-blue-600">KonnectHRC</span>, we
              believe people are the foundation of success. Our mission has
              always been to empower businesses with the right talent while
              guiding individuals towards opportunities that help them thrive.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every milestone we achieve is a reflection of our commitment to
              integrity, transparency, and excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
