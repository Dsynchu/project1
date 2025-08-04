import { motion } from "framer-motion";

export default function Israel() {
  const steps = [
    {
      title: "Step 1: Initial Registration",
      desc: "Submit scanned passport, digital photo (5x5 cm), education & experience certificates, Aadhaar/PAN, birth certificate and contact details.",
    },
    {
      title: "Step 2: Document Compilation",
      desc: "Provide CV, Police Clearance Certificate (PCC), medical report (14 days validity), signed offer letter and employment contract.",
    },
    {
      title: "Step 3: Work Permit & Visa",
      desc: "Israeli employer applies for Work Permit (30–45 days). After approval, candidate applies for B/1 Visa at VAC India (Delhi, Mumbai, Bangalore, Kolkata).",
    },
    {
      title: "Step 4: Pre‑Departure",
      desc: "PDOT training, emigration clearance (if needed), flight booking, final medical clearance.",
    },
    {
      title: "Step 5: Arrival in Israel",
      desc: "Activate B/1 residence card, biometric ID, register with insurance, start employment with listed employer.",
    },
  ];

  const vacancies = [
    {
      title: "Caregivers",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      desc: "High demand for trained caregivers with attractive salary packages and legal protection.",
    },
    {
      title: "Construction Workers",
      img: "https://images.unsplash.com/photo-1581092334867-1aab9f6e3f6a",
      desc: "Opportunities in infrastructure, housing, and large-scale government projects.",
    },
    {
      title: "Agriculture Helpers",
      img: "https://images.unsplash.com/photo-1605478371488-5e5c93d35306",
      desc: "Seasonal and permanent jobs in farming, greenhouses, and irrigation systems.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Employment in Israel 🇮🇱
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto"
        >
          Konnect HRC provides genuine opportunities for Indians seeking jobs in
          Israel. With our trusted partners, we ensure fair wages, legal migration,
          and complete support from application to arrival.
        </motion.p>

        {/* Vacancies */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Current Vacancies
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {vacancies.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={job.img}
                alt={job.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h4>
                <p className="text-gray-600 mb-4">{job.desc}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step by Step Process */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Visa Process (Step by Step)
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-16 bg-yellow-50 p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Important Notes
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Visa Type: B/1 (Non-Expert Worker), valid for 1 year, renewable up to 63 months.</li>
            <li>Employer provides medical insurance & severance pay.</li>
            <li>Candidate cannot change sector/employer without PIBA approval.</li>
            <li>Return ticket after job completion provided by employer.</li>
            <li>Penalty of USD 1500 if selected candidate fails to travel.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
