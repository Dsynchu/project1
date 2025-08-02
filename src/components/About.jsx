export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Old About Intro */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-10 text-center">
          Konnect Talent HR Consultancy helps businesses find the right people,
          and individuals find their dream careers. We focus on quality hiring
          and sustainable growth for both clients and candidates.
        </p>

        {/* New Image + Who We Are + Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Side Image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team work"
            className="rounded-2xl shadow-lg"
          />

          {/* Right Side Content */}
          <div>
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
          </div>
        </div>

        {/* Old Mission + Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To support clients through business challenges by balancing labour
              market needs and improving HR quality.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <p className="text-gray-600">
              Integrity, transparency, and commitment drive our HR solutions,
              ensuring trust and long‑term growth for both clients and
              candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
