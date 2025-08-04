import { motion } from "framer-motion";

const clients = [

    {
    name: "Cohen & Gresser (Dubai Office)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Generic_law_firm_logo.svg" // Placeholder; download actual from cohengroup.net or cohen-gresser.com
  },
  {
    name: "BCC International Group",
    logo: "https://www.bccgroupinternational.com/assets/images/bcc-logo-all/bcc-international-gold.svg" // Use your local asset; ensure path is correct
  },
  {
    name: "Dubai Investment Limited",
    logo: "https://www.dubaiinvestments.com/media/iqif5wdj/di-logo.png" // Valid Wikimedia URL for Dubai-based company
  },
  {
    name: "Al Maha Catering",
    logo: "https://www.almahacatering.ae/wp-content/uploads/2023/01/ALMAHACATERING-VERTICAL-WHITE.png" // Valid Wikimedia URL for Dubai-based company
  },
  {
    name: "Al-futtaim",
    logo: "https://innovationuae.com/wp-content/uploads/2021/01/al-futtaim-200.png" // Placeholder; download actual from khansaheb.com
  },
  
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






