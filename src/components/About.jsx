export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              At <span className="font-bold text-blue-600">KonnectHRC</span>, 
              we bridge the gap between businesses and talent. 
              Our mission is to provide innovative HR solutions that empower companies 
              to build world-class teams while guiding individuals toward meaningful careers.
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading HR consultancy delivering excellence 
              and creating lasting impact by connecting people with opportunities 
              that transform their careers and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
