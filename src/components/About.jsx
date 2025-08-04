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
      {/* 🔥 Animated Gradient Background */}
      <section id="about" className="relative py-20 animate-gradient-x text-white">
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-20">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-8"
          >
            About Us
          </motion.h2>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="leading-relaxed mb-10 text-center max-w-3xl mx-auto text-lg"
          >
            At <span className="font-bold text-yellow-300">KonnectHRC</span>, we
            connect talent with opportunities. Our mission is to transform hiring
            into a growth journey for businesses and careers alike.
          </motion.p>

          {/* Who We Are & Vision */}
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
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Who We Are</h3>
              <p className="mb-6">
                We are a passionate HR consultancy dedicated to bridging the gap between
                businesses and skilled professionals. With innovation and dedication, we
                help organizations build world-class teams.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Our Vision</h3>
              <p>
                To be the most trusted HR partner delivering excellence, fostering
                sustainable growth, and transforming careers globally.
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
              className="text-3xl md:text-4xl font-bold text-center mb-6"
            >
              Our Results in Numbers
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-4xl font-extrabold text-yellow-300">{stat.number}</h3>
                  <p className="mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - CEO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <img
              src="/images/ceo.jpg"
              alt="CEO"
              className="w-64 h-80 object-cover rounded-2xl shadow-lg mx-auto md:mx-0"
            />
            <img
              src="/images/signature.png"
              alt="CEO Signature"
              className="w-40 mt-6 mx-auto md:mx-0"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">CEO Message</h3>
          </motion.div>

          {/* Right Side - Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="font-bold text-blue-600">KonnectHRC</span>, people are the
              foundation of success. Our mission has always been to empower businesses
              with the right talent while guiding individuals toward meaningful careers.
              <br />
              <br />
              Every milestone we achieve is built on integrity, transparency, and
              excellence. As we grow, our focus remains on creating impactful connections
              that transform both businesses and lives.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
