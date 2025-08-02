export default function CompanyProfile() {
  return (
    <section id="company-profile" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Company Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - text */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              <span className="font-bold text-blue-600">KonnectHRC</span> is a 
              leading HR consultancy firm specializing in recruitment, training, 
              and workforce management. We help organizations across industries 
              to build strong teams, develop leadership, and achieve sustainable growth.
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Core Values
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✔</span> 
                Integrity and transparency in all dealings.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✔</span> 
                Client-centric approach ensuring long-term partnerships.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✔</span> 
                Continuous innovation in HR solutions.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✔</span> 
                Commitment to employee growth and development.
              </li>
            </ul>
          </div>

          {/* Right side - image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
              alt="Company team" 
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
