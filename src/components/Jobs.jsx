import { Briefcase } from "lucide-react";

export default function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Guwahati, India",
      type: "Full-time",
    },
    {
      title: "HR Executive",
      location: "Kolkata, India",
      type: "Full-time",
    },
    {
      title: "Business Development Manager",
      location: "Remote",
      type: "Contract",
    },
  ];

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Current Openings
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-700">{job.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{job.location}</p>
              <span className="text-sm text-gray-500 mb-4 block">{job.type}</span>
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
