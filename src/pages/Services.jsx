import React from "react";
import { motion } from "framer-motion";
import { Play, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: <Play className="w-12 h-12 text-white" />,
    title: "Training Programs",
    description:
      "Industry-leading training designed to elevate skills and empower professional growth.",
    longDescription:
      "Our training programs are crafted by industry experts to provide hands-on, practical skills. We offer courses in a variety of fields, from technical certifications to leadership development, all designed to meet the demands of today's fast-paced market.",
    cta: "Explore Training",
    link: "/training",
    image:
      "https://img.freepik.com/free-photo/daily-life-business-people-office_53876-47111.jpg",
  },
  {
    id: 2,
    icon: <BookOpen className="w-12 h-12 text-white" />,
    title: "Education Solutions",
    description:
      "Comprehensive education resources and courses tailored to your unique learning path.",
    longDescription:
      "We provide flexible education solutions for learners at every stage of their career. Our platform offers a mix of online and in-person courses, personalized coaching, and a wealth of learning resources to help you achieve your career goals.",
    cta: "Browse Courses",
    link: "/education",
    image:
      "https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg",
  },
  {
    id: 3,
    icon: <Users className="w-12 h-12 text-white" />,
    title: "Recruitment Services",
    description:
      "Connecting top talent with leading organizations through innovative recruitment strategies.",
    longDescription:
      "Our recruitment team specializes in finding the perfect match between talent and opportunity. We work with companies of all sizes across diverse industries, utilizing a streamlined and effective process to ensure success for both the employer and the candidate.",
    cta: "Start Recruiting",
    link: "/recruitment",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#653781]/80 to-[#b0436d]/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We provide customized, expert solutions designed to meet your
            recruitment, training, and educational needs.
          </motion.p>
        </div>
      </section>

      {/* New Section Added Here */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 grid lg:grid-cols-2 gap-16 md:gap-24 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <motion.div
          className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
          variants={itemVariants}
        >
          <img
            src="https://media.istockphoto.com/id/896358708/photo/light-bulb-with-brain-inside-the-hands-of-the-businessman.jpg?s=612x612&w=0&k=20&c=PyCPJ4tG3QL-vuVUg3K1_0fq2z-BEsp2SMRH-P6Rbkc="
            alt="About Our Services"
            className="w-full h-full rounded-3xl object-cover"
          />
        </motion.div>
        <motion.div className="space-y-6" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#653781] leading-tight">
            Comprehensive Solutions for Your Growth
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We offer a wide range of services to help individuals and
            organizations thrive in a competitive landscape. From personalized
            training programs to comprehensive recruitment solutions and
            tailored educational resources, our expertise is designed to help
            you succeed.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to empower you with the skills and talent you need to
            achieve your goals, whether you are a professional seeking to
            upskill or a company looking for your next great hire.
          </p>
        </motion.div>
      </motion.section>

      {/* Services Sections */}
      <div className="space-y-24 py-20 md:py-18">
        {services.map((service, index) => (
          <motion.section
            key={service.id}
            className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariants}
          >
            <motion.div
              className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-[#653781] to-[#b0436d]">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#b0436d] leading-tight">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.longDescription}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={service.link} // <-- link for the service page
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#653781] to-[#b0436d] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                  variants={itemVariants}
                >
                  {service.cta}
                </Link>
              </motion.div>
            </motion.div>
            <motion.img
              src={service.image}
              alt={service.title}
              className={`w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
              variants={itemVariants}
            />
          </motion.section>
        ))}
      </div>

      {/* Call to Action */}
      <motion.section
        className="bg-gradient-to-r from-[#653781] to-[#b0436d] text-white text-center py-20 md:py-18"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Ready to take the next step in your journey?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Reach out to us to learn more about how our customized services can
            help unlock your full potential.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-white text-[#653781] font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
};

export default Services;
