// components/WhyChooseUs.jsx
import React from "react";
import { ShieldCheck, TrendingUp, Heart, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Helper function to create a more dynamic animation variant
const createCardVariants = (delay) => ({
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: delay,
    },
  },
});

const reasons = [
  {
    id: 1,
    icon: <ShieldCheck className="w-10 h-10 text-[#653781]" />,
    title: "Trusted Expertise",
    description:
      "Years of proven experience delivering exceptional recruitment, training, and education services.",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-10 h-10 text-[#b0436d]" />,
    title: "Growth Focused",
    description:
      "Tailored programs and strategies focused on continuous individual and organizational growth.",
  },
  {
    id: 3,
    icon: <Heart className="w-10 h-10 text-[#653781]" />,
    title: "Passionate Support",
    description:
      "Dedicated team committed to providing personalized and passionate assistance to every client.",
  },
  {
    id: 4,
    icon: <Clock className="w-10 h-10 text-[#b0436d]" />,
    title: "Timely Delivery",
    description:
      "Efficient project management ensuring timely and quality delivery of all our services.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-20 md:py-18">
      {/* Enhanced Background Gradient & Subtle Pattern */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#653781]/5 via-[#b0436d]/5 to-transparent opacity-50 blur-[100px]" /> */}
      <div className="absolute inset-0 z-0 opacity-10"
           style={{ backgroundImage: "url('/path/to/pattern-wavy-lines.svg')", backgroundRepeat: "repeat", backgroundSize: "300px" }}
      />
      
      <div className="relative text-center mb-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#653781]"
        >
          Why Choose <span className="text-[#b0436d]">Omkkar Innovations</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 font-medium"
        >
          Our focus is on **results, relationships, and reliability**. Here’s why clients trust us to power their success.
        </motion.p>
      </div>

      {/* Animated Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {reasons.map(({ id, icon, title, description }, i) => (
          <motion.div
            key={id}
            className="group p-8 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl
                       hover:shadow-2xl hover:border-[#653781] transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500
                       ring-0 group-hover:ring-4 group-hover:ring-[#653781]/10"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={createCardVariants(i * 0.15)}
          >
            <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-[#653781]/20 to-[#b0436d]/20 rounded-full
                            group-hover:from-[#653781]/40 group-hover:to-[#b0436d]/40 transition-colors duration-500">
              <motion.div
                className="transition-transform duration-500 group-hover:scale-110"
              >
                {icon}
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold text-[#653781] mb-3 transition-colors duration-300">
              <motion.span
                className="group-hover:text-[#b0436d] transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {title}
              </motion.span>
            </h3>
            <p className="text-gray-600 font-light">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;