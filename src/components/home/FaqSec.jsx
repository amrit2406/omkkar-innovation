// components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries do you specialize in for recruitment?",
    answer:
      "We specialize in diverse industries including IT, healthcare, finance, and education to match top talent with the right opportunities.",
  },
  {
    question: "What training programs do you offer?",
    answer:
      "Our training programs cover professional skills, technical certifications, and leadership development customized to industry needs.",
  },
  {
    question: "How flexible are your education solutions?",
    answer:
      "We provide flexible online and offline education courses designed to fit your schedule and career goals.",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "Simply contact us through the form on our website or reach out via the provided contact information to discuss your requirements.",
  },
  {
    question: "Do you provide personalized coaching?",
    answer:
      "Yes, we offer one-on-one coaching sessions to help with career planning, interview preparation, and skills enhancement.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-18 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 z-0 opacity-10"
           style={{ backgroundImage: "url('/path/to/subtle-texture-pattern.svg')", backgroundRepeat: "repeat", backgroundSize: "300px" }}
      />
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] mb-10 text-center leading-tight">
          Have Questions? We Have Answers.
        </h2>
        <motion.div
          className="space-y-6"
          variants={sectionVariants}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`bg-white rounded-2xl border-2 border-transparent shadow-lg hover:shadow-2xl 
                          transition-all duration-300 overflow-hidden cursor-pointer
                          ${openIdx === idx ? 'border-[#b0436d] shadow-2xl' : ''}`}
              onClick={() => toggle(idx)}
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-center p-6">
                <h3 className="text-lg md:text-xl font-semibold text-[#653781] leading-snug pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ChevronDown className={`w-8 h-8 ${openIdx === idx ? 'text-[#b0436d]' : 'text-gray-400'} transition-colors duration-300`} />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-700 p-6 pt-0 leading-relaxed max-w-prose border-t border-gray-100">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;