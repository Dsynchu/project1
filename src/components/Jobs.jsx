import { motion } from "framer-motion";

export default function JobsSection() {
  // Dubai Jobs
  const jobsDubai = [
    { 
      title: "Printing Machine Operator", 
      location: "Dubai, UAE", 
      salary: "AED 1200 – 1500",
      img: "/images/printing.jpg", 
      details: "2+ years exp · Full-time · 8 hrs/day" 
    },
    { 
      title: "HR Assistant", 
      location: "Dubai, UAE", 
      salary: "AED 2000 – 2500",
      img: "/images/hr.jpg", 
      details: "1+ year exp · Full-time · Office based" 
    },
    { 
      title: "Sales Executive", 
      location: "Dubai, UAE", 
      salary: "AED 2500 – 3000",
      img: "/images/sales.jpg", 
      details: "Target based · Commission available" 
    },
    { 
      title: "Data Entry Clerk", 
      location: "Dubai, UAE", 
      salary: "AED 1800 – 2200",
      img: "/images/dataentry.jpg", 
      details: "Basic computer knowledge · MS Office" 
    },
    { 
      title: "Office Boy", 
      location: "Dubai, UAE", 
      salary: "AED 1200 – 1500",
      img: "/images/officeboy.jpg", 
      details: "Cleaning · Support tasks · Tea/coffee" 
    },
  ];

  // Overseas Jobs
  const jobsOverseas = [
    { 
      title: "Nurse", 
      location: "Qatar", 
      salary: "QAR 4000 – 5000",
      img: "/images/nurse.jpg", 
      details: "Valid license required · Full-time" 
    },
    { 
      title: "Welder", 
      location: "Saudi Arabia", 
      salary: "SAR 2000 – 2500",
      img: "/images/welder.jpg", 
      details: "Gulf exp preferred · 9 hrs/day" 
    },
    { 
      title: "Driver", 
      location: "Oman", 
      salary: "OMR 180 – 220",
      img: "/images/driver.jpg", 
      details: "Valid GCC license required" 
    },
    { 
      title: "Chef", 
      location: "Bahrain", 
      salary: "BHD 300 – 400",
      img: "/images/chef.jpg", 
      details: "Multi-cuisine exp preferred" 
    },
    { 
      title: "Electrician", 
      location: "Kuwait", 
      salary: "KWD 150 – 200",
      img: "/images/electrician.jpg", 
      details: "ITI/Diploma · 3+ years exp" 
    },
  ];

  // Job Card Component
  const JobCard = ({ job }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      <img 
        src={job.img} 
        alt={job.title} 
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{job.location}</p>
      <p className="text-gray-500 text-sm mt-1">{job.details}</p>
      <p className="text-blue-600 font-medium mt-2">{job.salary}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Apply Now
      </button>
    </motion.div>
  );

  return (
    <section id="jobs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Current Job Openings
        </motion.h2>

        {/* Dubai Jobs */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-blue-600 pl-3"
        >
          Dubai (Local)
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobsDubai.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>

        {/* Overseas Jobs */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-green-600 pl-3"
        >
          Overseas
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsOverseas.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
