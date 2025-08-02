export default function CompanyProfileSection() {
  return (
    <section id="company-profile" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Company Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Office teamwork"
            className="rounded-2xl shadow-lg"
          />

          {/* Right Content */}
          <div>
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
            <p className="text-gray-600 mb-4">
              <strong>Office:</strong> Abu Saif Business Center, Office No M35,
              Near Al Qiyadah Metro, Dubai
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Contact:</strong> +971 56 277 8484 | info@konnectthrc.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
