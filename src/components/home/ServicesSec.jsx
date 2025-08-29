import React from "react";
import { motion } from "framer-motion";
import { Users, Play, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: <Play className="w-10 h-10 text-white" />,
    title: "Training Programs",
    description:
      "Industry-leading training designed to elevate skills and empower professional growth.",
  },
  {
    id: 2,
    icon: <BookOpen className="w-10 h-10 text-white" />,
    title: "Education Solutions",
    description:
      "Comprehensive education resources and courses tailored to your unique learning path.",
  },
  {
    id: 3,
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Recruitment Services",
    description:
      "Connecting top talent with leading organizations through innovative recruitment strategies.",
  },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 md:py-18">
      {/* Decorative background blur */}
      {/* <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-gradient-to-r from-[#653781]/30 to-[#b0436d]/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-r from-[#b0436d]/20 to-[#653781]/20 rounded-full blur-3xl opacity-40" /> */}

      <div className="text-center mb-16 space-y-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#653781] to-[#b0436d] bg-clip-text text-transparent">
          Our Core Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          Discover our specialized offerings designed to help you succeed in
          today&apos;s competitive landscape.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map(({ id, icon, title, description }) => (
          <motion.div
            key={id}
            className="group relative p-[2px] rounded-3xl bg-gradient-to-r from-[#653781] to-[#b0436d] shadow-md hover:shadow-xl transition-all duration-500"
            variants={itemVariants}
            whileHover={{ scale: 1.04, rotate: 1 }}
          >
            {/* Inner card */}
            <div className="flex flex-col items-center text-center space-y-5 p-8 bg-white rounded-3xl h-full">
              {/* Icon with gradient ring animation */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-[#653781] to-[#b0436d] animate-spin-slow opacity-30" />
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#653781] to-[#b0436d] relative z-10 shadow-lg">
                  {icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#653781] group-hover:text-[#b0436d] transition-colors">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-[#653781] to-[#b0436d] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore All Services
          <ChevronRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Services;
