import { motion } from "framer-motion";

const clients = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Infosys_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Tata_Consultancy_Services_Logo.svg" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Trusted By Leading Companies
        </h2>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex space-x-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {clients.map((client, i) => (
              <img
                key={i}
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}

            {/* duplicate for seamless loop */}
            {clients.map((client, i) => (
              <img
                key={`dup-${i}`}
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
