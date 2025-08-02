import { Briefcase, Users, GraduationCap } from "lucide-react"; 

export default function Services() {
  const services = [
    {
      title: "Recruitment Solutions",
      desc: "Connecting top talent with leading companies across industries.",
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "HR Consulting",
      desc: "Helping businesses with HR strategies, policies, and compliance.",
      icon: <Users className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Training & Development",
      desc: "Upskilling employees with workshops and leadership programs.",
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
