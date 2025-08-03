import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { number: "100+", label: "Clients Served" },
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Successful Hires" },
    { number: "100+", label: "Active Partnerships" },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          {/* About Us Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-8"
          >
            About Us
          </motion.h2>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed mb-10 text-center"
          >
            Konnect Talent HR Consultancy helps businesses find the right people,
            and individuals find their dream careers. We focus on quality hiring
            and sustainable growth for both clients and candidates.
          </motion.p>

          {/* Image + Who We Are + Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <motion.img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team work"
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
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At <span className="font-bold text-blue-600">KonnectHRC</span>, we
                bridge the gap between businesses and talent. Our mission is to
                provide innovative HR solutions that empower companies to build
                world-class teams while guiding individuals toward meaningful
                careers.
              </p>

              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading HR consultancy delivering excellence and
                creating lasting impact by connecting people with opportunities
                that transform their careers and businesses.
              </p>
            </motion.div>
          </div>

          {/* Mission + Values Cards */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To support clients through business challenges by balancing labour
                market needs and improving HR quality.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, and commitment drive our HR solutions,
                ensuring trust and long‑term growth for both clients and
                candidates.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              Our Results in Numbers
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mb-12"
            >
              We are a growing consultancy, continuously expanding our reach while
              maintaining quality. These numbers reflect our journey and impact.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-4xl font-extrabold text-gray-900">
                    {stat.number}
                  </h3>
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 👉 CEO Message Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo + Signature + Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <img
              src="/images/ceo.jpg" // 👈 yaha apna CEO photo ka path daal
              alt="CEO"
              className="w-64 h-80 object-cover rounded-2xl shadow-lg mx-auto md:mx-0"
            />

            <img
              src="/images/signature.png" // 👈 yaha CEO signature image ka path daal
              alt="CEO Signature"
              className="w-40 mt-6 mx-auto md:mx-0"
            />

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              CEO Message
            </h3>
          </motion.div>

          {/* Right Side - Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="font-bold text-blue-600">KonnectHRC</span>, we
              believe that people are the true foundation of success. Our mission
              has always been to empower businesses with the right talent while
              guiding individuals towards opportunities that help them thrive.
              <br />
              <br />
              Every milestone we achieve is a reflection of our commitment to
              integrity, transparency, and excellence. As we continue to grow, we
              remain dedicated to creating meaningful connections that transform
              careers and businesses alike.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
