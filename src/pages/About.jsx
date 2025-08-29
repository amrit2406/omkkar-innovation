import React from "react";
import { motion } from "framer-motion";
import { Users, Play, BookOpen, Handshake, Lightbulb, TrendingUp, CalendarCheck, Rocket, Award, Gem, Target } from "lucide-react";

// Data Definitions
const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Visionary leader passionate about empowering human potential.",
  },
  {
    name: "Anita Desai",
    role: "Head of Training & Development",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Expert in crafting innovative learning experiences for professionals.",
  },
  {
    name: "Suresh Patel",
    role: "Lead Talent Acquisition Specialist",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    bio: "Dedicated to connecting top-tier talent with their dream careers.",
  },
  {
    name: "Priya Sharma",
    role: "Chief Marketing Officer",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Drives our brand presence and client engagement strategies.",
  },
];

const milestones = [
  { year: "2015", event: "Omkkar Innovations founded in Bhubaneswar, Odisha, with a vision to empower talent through specialized recruitment." },
  { year: "2017", event: "Launched our first successful online professional development training program, reaching over 500 participants." },
  { year: "2019", event: "Expanded recruitment services to include IT, Healthcare, and Finance sectors across India." },
  { year: "2021", event: "Introduced bespoke corporate education solutions, partnering with local universities in Odisha." },
  { year: "2023", event: "Celebrated serving over 500 companies and empowering 10,000+ professionals globally. Recognized as a top HR solution provider in Eastern India." }
];

const values = [
  { title: "Integrity", desc: "We uphold the highest ethical standards, fostering trust and transparency in all interactions.", icon: <Handshake className="w-10 h-10 text-white" /> },
  { title: "Innovation", desc: "Continuously seeking creative solutions to challenges and embracing new methodologies.", icon: <Lightbulb className="w-10 h-10 text-white" /> },
  { title: "Excellence", desc: "Committed to delivering superior quality and exceeding expectations in every service.", icon: <Award className="w-10 h-10 text-white" /> },
  { title: "Growth", desc: "Dedicated to the continuous development and success of our clients, partners, and team.", icon: <TrendingUp className="w-10 h-10 text-white" /> },
  { title: "Client-Centric", desc: "Placing our clients' needs at the forefront, building lasting relationships based on mutual respect.", icon: <Target className="w-10 h-10 text-white" /> },
];

const services = [
  {
    title: "Recruitment Services",
    description: "Connecting top talent with leading organizations through innovative strategies tailored to industry needs.",
    icon: <Users className="w-12 h-12 text-[#653781]" />,
  },
  {
    title: "Training Programs",
    description: "Industry-leading professional development designed to elevate skills and empower career growth.",
    icon: <Play className="w-12 h-12 text-[#b0436d]" />,
  },
  {
    title: "Education Solutions",
    description: "Comprehensive resources and courses crafted to guide individuals on their unique learning path.",
    icon: <BookOpen className="w-12 h-12 text-[#653781]" />,
  },
];

// Framer Motion Variants
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

const AboutUsPage = () => {
  return (
    <main className="bg-white text-gray-800 relative overflow-hidden">
      {/* Dynamic background blur for visual depth */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#653781]/5 via-[#b0436d]/5 to-transparent blur-[150px] opacity-70" /> */}

      {/* Hero Section (as provided, not modified) */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#653781]/80 to-[#b0436d]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Omkkar Innovations
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-medium" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering professionals and organizations to achieve their full potential.
          </motion.p>
        </div>
      </section>

      {/* Story & Mission - Redesigned */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <motion.div className="space-y-8" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] mb-4 leading-tight">
            Our Journey <br className="hidden md:block" /> & Driving Purpose
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-[#b0436d] pl-4">
            Omkkar Innovations was founded in 2015 in Bengaluru, Karnataka, with a clear mission: to bridge the gap between talent and opportunity through innovative recruitment, comprehensive training, and modern education solutions.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We have grown steadily by prioritizing personalized services, cutting-edge methods, and an unwavering commitment to excellence, setting us apart in the industry.
          </p>
          {/* <motion.a
            href="/our-values"
            className="inline-flex items-center gap-2 mt-6 text-[#b0436d] font-semibold hover:text-[#653781] transition-colors duration-300"
            variants={itemVariants}
          >
            Discover Our Values <TrendingUp className="w-5 h-5" />
          </motion.a> */}
        </motion.div>
        <motion.div
          className="relative w-full h-80 md:h-96 rounded-3xl shadow-2xl overflow-hidden group border border-gray-100"
          variants={itemVariants}
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Company Story"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#653781]/40 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </motion.section>

      {/* Services at a Glance - Redesigned */}
      <motion.section
        className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#b0436d] mb-16 text-center leading-tight">
            Our Expertise at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map(({ title, description, icon }, index) => (
              <motion.div
                key={index}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center text-center
                           hover:shadow-2xl hover:border-[#653781] transform hover:-translate-y-2 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-6 bg-gradient-to-tr from-[#653781]/15 to-[#b0436d]/15 p-5 rounded-full shadow-inner">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-[#653781] mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
                <motion.a
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-[#b0436d] font-semibold hover:text-[#653781] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team - Redesigned */}
      {/* <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] mb-16 text-center leading-tight">
          Meet Our Visionary Leaders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map(({ name, role, photo, bio }) => (
            <motion.div
              key={name}
              className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group
                         hover:shadow-2xl hover:border-[#b0436d] transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white transition-transform duration-300 group-hover:scale-105">
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#b0436d] mb-1 group-hover:text-[#653781] transition-colors duration-300">
                {name}
              </h3>
              <p className="text-gray-700 font-medium text-sm mb-4">{role}</p>
              <p className="text-gray-500 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                "{bio}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section> */}

      {/* Milestones - Redesigned */}
      {/* <motion.section
        className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] mb-16 text-center leading-tight">
            Our Journey Through Milestones
          </h2>
          <div className="relative space-y-12 md:space-y-0 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gradient-to-b from-[#b0436d] to-[#653781] before:rounded-full before:top-0 before:bottom-0">
            {milestones.map(({ year, event }, index) => (
              <motion.div
                key={year}
                className={`flex items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                variants={itemVariants}
              >
                <div className={`flex flex-col items-center w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    className="flex-shrink-0 text-2xl md:text-3xl font-extrabold text-white bg-gradient-to-br from-[#653781] to-[#b0436d] w-32 h-32 flex items-center justify-center rounded-full shadow-lg z-10 border-4 border-white mb-4 md:mb-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {year}
                  </motion.div>
                  <motion.div
                    className={`p-8 rounded-2xl shadow-xl bg-white border border-gray-100 mt-6 md:mt-0 max-w-sm
                                ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                    whileHover={{ y: -5, shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-center md:text-left">{event}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Values - Redesigned */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#b0436d] mb-16 text-center leading-tight">
          Our Guiding Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {values.map(({ title, desc, icon }) => (
            <motion.div
              key={title}
              className="p-10 bg-gradient-to-br from-[#653781]/5 to-[#b0436d]/5 rounded-3xl shadow-lg border border-gray-100
                         hover:shadow-2xl hover:border-[#653781] transition-all duration-300 transform hover:rotate-1"
              whileHover={{ scale: 1.03 }}
              variants={itemVariants}
            >
              <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-[#653781] to-[#b0436d] shadow-md">
                {icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#653781]">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action - Redesigned */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-[#653781] to-[#b0436d] rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative SVG elements */}
          <svg className="absolute top-0 left-0 w-32 h-32 opacity-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"/></svg>
          <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"/></svg>

          <motion.h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" variants={itemVariants}>
            Ready to Transform Your Future?
          </motion.h2>
          <motion.p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10" variants={itemVariants}>
            Whether you're looking to elevate your skills, find your dream role, or empower your team, Omkkar Innovations is your trusted partner.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-white text-[#653781] font-bold py-4 px-12 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 text-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            Connect With Us
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutUsPage;