import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building, TrendingUp, Sparkles, MapPin, Clock, ArrowRight, Users } from "lucide-react";

// Data for the sections
const jobOpenings = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Develop and maintain software applications. Requires 3+ years experience in front-end or back-end development.",
  },
  {
    id: 2,
    title: "Training Coordinator",
    location: "Remote",
    type: "Contract",
    description: "Manage training schedules and liaise with trainers and participants to ensure smooth sessions.",
  },
  {
    id: 3,
    title: "HR Recruiter",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Lead talent acquisition efforts to source, interview, and hire the best candidates in multiple industries.",
  },
  {
    id: 4,
    title: "Marketing Specialist",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Design and execute marketing campaigns to promote our services and expand our reach.",
  },
  {
    id: 5,
    title: "Content Writer",
    location: "Remote",
    type: "Part-time",
    description: "Create engaging and informative content for our blog, website, and social media channels.",
  },
  {
    id: 6,
    title: "Business Development Executive",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Drive sales and forge new partnerships to expand our market presence and client base.",
  },
];

const recruitmentSteps = [
  {
    step: "1. Apply Online",
    description: "Submit your updated resume and a personalized cover letter through our portal.",
    icon: <Sparkles className="w-12 h-12 text-[#653781]" />,
  },
  {
    step: "2. Initial Screening",
    description: "Our HR team reviews applications to find the best fit for the role and our company culture.",
    icon: <Users className="w-12 h-12 text-[#653781]" />,
  },
  {
    step: "3. Interview Stages",
    description: "We conduct a series of interviews to assess your skills, experience, and fit within our team.",
    icon: <Briefcase className="w-12 h-12 text-[#653781]" />,
  },
  {
    step: "4. Final Offer",
    description: "Receive a competitive job offer and begin your exciting journey with Omkkar Innovations.",
    icon: <TrendingUp className="w-12 h-12 text-[#653781]" />,
  },
];

const benefits = [
  {
    title: "Professional Growth",
    icon: <TrendingUp className="w-10 h-10 text-white" />,
    description: "We invest in your professional development with regular training, mentorship, and clear career progression plans.",
  },
  {
    title: "Supportive Culture",
    icon: <Building className="w-10 h-10 text-white" />,
    description: "Join a supportive and collaborative environment where every voice is heard, valued, and contributes to our shared success.",
  },
  {
    title: "Flexible Work",
    icon: <Briefcase className="w-10 h-10 text-white" />,
    description: "We offer flexible work arrangements and prioritize a healthy balance between your career and personal life.",
  },
];

// Framer motion variants for animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Recruitment = () => {
  return (
    <main className="bg-white text-gray-800 relative overflow-hidden">
      {/* Dynamic background blur for visual depth */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#653781]/5 via-[#b0436d]/5 to-transparent blur-[150px] opacity-70" /> */}

      {/* Hero Banner (as provided, not modified) */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661344287754-5b54e8feb18b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#653781]/80 to-[#b0436d]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We’re looking for talented and passionate professionals to help us deliver exceptional services.
          </motion.p>
        </div>
      </section>

      {/* New section added here */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 grid lg:grid-cols-2 gap-16 md:gap-24 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <motion.div
          className="w-full h-80 md:h-96 rounded-3xl shadow-xl overflow-hidden group border border-gray-100"
          variants={itemVariants}
          whileHover={{ scale: 1.03, rotate: -1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1770&auto=format&fit=crop"
            alt="About Our Company Culture"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
        <motion.div
          className="space-y-6"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#653781] leading-tight">
            Our Culture: Where Innovation Thrives
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Omkkar Innovations, we believe in fostering a culture of **collaboration, creativity, and continuous growth**. We're a team of passionate professionals dedicated to making a real impact.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our flat organizational structure ensures that everyone has a voice and the opportunity to lead. We prioritize a healthy work-life balance and provide the resources you need to excel in your career and personal life.
          </p>
        </motion.div>
      </motion.section>

      {/* Why Work With Us - Redesigned */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] mb-16 text-center leading-tight">
          Why Choose a Career with Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {benefits.map(({ title, description, icon }) => (
            <motion.div
              key={title}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center
                         hover:shadow-2xl hover:border-[#b0436d] transform hover:-translate-y-2 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] shadow-md">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-[#b0436d] mb-3">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Current Openings - Redesigned */}
      <motion.section
        className="relative bg-gray-50 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] mb-16 text-center leading-tight">
            Explore Our Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobOpenings.map(({ id, title, location, type, description }) => (
              <motion.div
                key={id}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col
                           hover:shadow-xl hover:border-[#b0436d] transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#653781] mb-2">{title}</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><MapPin size={16} /> {location}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {type}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{description}</p>
                </div>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white px-8 py-3 rounded-full font-semibold shadow-md
                             hover:scale-105 transition-transform duration-300 transform hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recruitment Process - Redesigned */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 text-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#b0436d] mb-16 leading-tight">
          A Simple & Transparent Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {recruitmentSteps.map(({ step, description, icon }, index) => (
            <motion.div
              key={step}
              className="relative p-8 rounded-3xl bg-white shadow-xl flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 border-2 border-dashed border-[#b0436d] text-[#653781] transition-colors duration-300 group-hover:bg-[#b0436d]">
                <span className="text-3xl font-extrabold text-[#b0436d]">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-[#653781]">{step.substring(3)}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call To Action - Redesigned */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-[#653781] to-[#b0436d] rounded-3xl shadow-2xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Subtle background circles for a modern, fluid look */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-white/5 opacity-50 blur-3xl"></div>

          <motion.h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" variants={itemVariants}>
            Ready to Take the Next Step?
          </motion.h2>
          <motion.p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10" variants={itemVariants}>
            If you’re ready to start a rewarding career with a company that values your growth and well-being, we encourage you to apply today.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#653781] font-bold px-12 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey <ArrowRight size={20} />
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
};

export default Recruitment;