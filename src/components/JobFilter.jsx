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
    <section id="job-filter" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Find Your Dream Job
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.location} • {job.type}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">
              No jobs found. Try another search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
