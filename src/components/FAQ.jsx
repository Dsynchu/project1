import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does KonnectHRC provide?",
    answer:
      "We specialize in HR consulting, recruitment, staffing solutions, training, and career guidance. Our mission is to connect talent with the right opportunities."
  },
  {
    question: "How can I apply for jobs?",
    answer:
      "You can explore current job openings in the Jobs section and filter them using our Find Your Dream Job tool. Simply click on Apply to submit your details."
  },
  {
    question: "Do you provide services for companies or job seekers?",
    answer:
      "Both! We help companies hire the best talent, and we also guide job seekers to land their dream roles."
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in India but provide HR consultancy and recruitment services globally through our network."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer transition hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">
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
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
