import { useState } from "react";

const jobs = [
  { id: 1, title: "Frontend Developer", location: "Bangalore", type: "Full-time" },
  { id: 2, title: "Backend Developer", location: "Hyderabad", type: "Full-time" },
  { id: 3, title: "UI/UX Designer", location: "Remote", type: "Part-time" },
  { id: 4, title: "HR Manager", location: "Delhi", type: "Full-time" },
  { id: 5, title: "Data Analyst", location: "Mumbai", type: "Internship" },
];

export default function JobFilter() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchLocation = location === "All" || job.location === location;
    return matchSearch && matchLocation;
  });

  return (
    <section
      id="job-filter"
      className="relative py-20 animate-gradient-x"
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff, #e0e7ff, #fae8ff, #e0f2fe)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Overlay for blur */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-20 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 drop-shadow">
          Find Your <span className="text-blue-600">Dream Job</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 gap-4 mb-12">
          <input
            type="text"
            placeholder="🔍 Search by role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white/70 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-md"
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-white/70 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-md"
          >
            <option>All</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Remote</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
        </div>

        {/* Job List */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-transparent hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 font-medium">
                   {job.location} • {job.type}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-2 font-medium">
              No jobs found. Try another search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
