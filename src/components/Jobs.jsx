export default function JobsSection() {
  const jobs = [
    {
      title: "Printing Machine Operator",
      location: "Dubai, UAE",
      salary: "AED 1200‑1500",
      contract: "2 years",
    },
    {
      title: "Personal Driver",
      location: "Dubai, UAE",
      salary: "AED 2000‑3000",
      contract: "2 years",
    },
    {
      title: "Caretaker / House Staff",
      location: "Dubai, UAE",
      salary: "AED 2000‑3000",
      contract: "2 years",
    },
  ];

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Current Job Openings
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <img
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Job Opportunities"
            className="rounded-2xl shadow-lg"
          />

          {/* Right Job Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-gray-600">{job.contract}</p>
                <p className="text-gray-600 mb-4">
                  <strong>Salary:</strong> {job.salary}
                </p>
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
