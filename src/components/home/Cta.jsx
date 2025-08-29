import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Framer motion variants for animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CTASection = () => {
  return (
    <motion.section
      className="relative overflow-hidden py-20 md:py-18 z-10 bg-gray-50 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#653781] to-[#b0436d] rounded-3xl shadow-2xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Subtle background circles for a modern look */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-white/5 opacity-50 blur-3xl"></div>

          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
            variants={itemVariants}
          >
            Ready to Master New Skills?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10"
            variants={itemVariants}
          >
            Take the first step towards professional excellence. Explore our
            programs and start your journey today.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact" // 👈 your route here
              className="inline-flex items-center justify-center gap-2 bg-white text-[#653781] font-bold px-12 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
            >
              Enroll Today <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
