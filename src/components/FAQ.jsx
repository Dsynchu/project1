import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does KonnectHRC provide?",
    answer:
      "We specialize in HR consulting, recruitment, staffing solutions, training, and career guidance. Our mission is to connect talent with the right opportunities.",
  },
  {
    question: "How can I apply for jobs?",
    answer:
      "You can explore current job openings in the Jobs section and filter them using our Find Your Dream Job tool. Simply click on Apply to submit your details.",
  },
  {
    question: "Do you provide services for companies or job seekers?",
    answer:
      "Both! We help companies hire the best talent, and we also guide job seekers to land their dream roles.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in India but provide HR consultancy and recruitment services globally through our network.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 animate-gradient-x"
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff, #e0e7ff, #fdf2f8, #e0f2fe)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Overlay blur for smoothness */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-14 drop-shadow">
          ❓ Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-6 cursor-pointer border border-transparent hover:border-blue-500 hover:shadow-2xl transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-700 leading-relaxed text-base"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
