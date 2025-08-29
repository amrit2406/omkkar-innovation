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

const CTA = () => {
  return (
    <motion.section
      className="py-12 md:py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-12 text-white bg-gradient-to-r from-[#653781] to-[#b0436d] shadow-2xl relative overflow-hidden">
        {/* Subtle background circles for a modern look */}
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5 opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-white/5 opacity-50 blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 leading-tight">
              Ready to take the next step?
            </h2>
            <p className="text-lg md:text-xl font-light opacity-90">
              Transform your skills and advance your career today.
            </p>
          </div>
          {/* Right Button */}
          <div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/training" // 👈 change this to your desired route
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-white text-[#653781] transition-transform duration-300 hover:scale-105 shadow-md"
              >
                Explore Programs
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
