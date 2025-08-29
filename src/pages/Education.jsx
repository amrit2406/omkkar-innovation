import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  Globe,
  Users,
  Award,
  Zap,
  Code,
  Layout,
  Heart,
  Star,
  Activity,
  Compass,
  ArrowRight,
} from "lucide-react";

// Course categories
const courseCategories = [
  {
    id: 1,
    icon: <Book className="w-12 h-12 text-white" />,
    title: "Online Courses",
    description:
      "Flexible and accessible courses designed to fit your schedule and learning pace.",
  },
  {
    id: 2,
    icon: <Globe className="w-12 h-12 text-white" />,
    title: "International Programs",
    description:
      "Collaborations with global institutions to offer world-class education opportunities.",
  },
  {
    id: 3,
    icon: <Users className="w-12 h-12 text-white" />,
    title: "Community Learning",
    description:
      "Engage with a diverse learning community through forums, study groups, and workshops.",
  },
];

// Educational pillars
const educationPillars = [
  {
    icon: <Heart className="w-12 h-12 text-white" />,
    title: "Holistic Education",
    description: "Fostering overall development of mind, body, and spirit.",
  },
  {
    icon: <Star className="w-12 h-12 text-white" />,
    title: "Academic Excellence",
    description: "Providing rigorous academic programs for deep learning.",
  },
  {
    icon: <Activity className="w-12 h-12 text-white" />,
    title: "Co-curricular Activities",
    description:
      "Sports, arts, and skill-building activities for well-rounded growth.",
  },
  {
    icon: <Compass className="w-12 h-12 text-white" />,
    title: "Value-based Education",
    description: "Instilling ethics, integrity, and moral values.",
  },
  {
    icon: <Zap className="w-12 h-12 text-white" />,
    title: "Mindfulness & Meditation",
    description: "Encouraging focus, self-awareness, and mental well-being.",
  },
  {
    icon: <Layout className="w-12 h-12 text-white" />,
    title: "Cultural Diversity",
    description: "Promoting respect and understanding of diverse cultures.",
  },
];

// Featured courses
const featuredCourses = [
  {
    title: "Data Science Fundamentals",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
    duration: "10 Weeks",
    level: "Beginner",
    description:
      "An introduction to data science, covering key concepts and practical applications.",
  },
  {
    title: "Digital Marketing Masterclass",
    image:
      "https://t4.ftcdn.net/jpg/02/52/76/09/360_F_252760983_ZTCURKreID1WJkC7uiX6olt7hH0Q7v8X.jpg",
    duration: "8 Weeks",
    level: "Intermediate",
    description:
      "Learn to create and manage effective digital marketing strategies across various platforms.",
  },
];

// Benefits
const benefits = [
  {
    icon: <Zap />,
    text: "Expert educators with years of industry experience.",
  },
  {
    icon: <Code />,
    text: "Interactive learning tools and multimedia content.",
  },
  { icon: <Layout />, text: "Personalized learning paths and assessments." },
  {
    icon: <Award />,
    text: "Certifications that enhance your career prospects.",
  },
];

// Framer motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=870&auto=format&fit=crop')",
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
            Education & Learning
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empower yourself with holistic and high-quality educational programs
            tailored to your growth.
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
          className="w-full h-80 md:h-96 rounded-3xl shadow-xl overflow-hidden group border border-gray-100"
          variants={itemVariants}
          whileHover={{ scale: 1.03, rotate: -1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
            alt="About Our Education Philosophy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
        <motion.div className="space-y-6" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#653781] leading-tight">
            Our Education Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We believe that education is a transformative journey that extends beyond the classroom. Our approach focuses on **empowering learners** with practical skills, critical thinking, and the values needed to succeed in a dynamic world.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our curriculum is constantly updated to stay relevant with industry demands, ensuring you are equipped with the latest knowledge. We offer a supportive and engaging environment where every student is encouraged to **explore, innovate, and grow**.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white px-8 py-3 rounded-full font-semibold shadow-md
                         hover:scale-105 transition-transform duration-300 transform hover:shadow-lg"
          >
            Learn More <ArrowRight size={20} />
          </a>
        </motion.div>
      </motion.section>

      {/* Course Categories */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#b0436d] mb-12 text-center">
          Course Categories
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {courseCategories.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-[#653781] to-[#b0436d]">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#653781]">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Educational Pillars */}
      <motion.section
        className="relative overflow-hidden bg-gray-50 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        {/* Subtle background for a creative touch */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(#b0436d 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#653781]/5 via-[#b0436d]/5 to-transparent blur-[150px] opacity-70" />

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#653781] mb-12 text-center">
            Our Educational Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {educationPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-[2rem] p-10 shadow-xl flex flex-col items-center
                            border-2 border-transparent transition-all duration-500
                            hover:border-transparent hover:shadow-2xl hover:scale-[1.03]
                            relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#653781] to-[#b0436d] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-6 w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] shadow-md transition-all duration-500 transform group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#b0436d] mb-4 mt-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed px-4">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Courses */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#653781] mb-12 text-center">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#b0436d] mb-2">
                  {course.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 mb-4">
                  <span>{course.duration}</span>
                  <span className="text-gray-400">•</span>
                  <span>{course.level}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {course.description}
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[#653781] to-[#b0436d] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="relative overflow-hidden py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        {/* Subtle background pattern for visual interest */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#ddd 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#653781] mb-16 text-center">
            Why Learn With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center
                border-2 border-transparent transition-all duration-300
                hover:shadow-2xl hover:border-[#b0436d] transform hover:-translate-y-2
                group relative overflow-hidden"
                variants={itemVariants}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#653781] to-[#b0436d] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-6 w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] shadow-md text-white transition-transform duration-500 transform group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-700 font-semibold leading-relaxed mt-4">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.section
        className="bg-gradient-to-r from-[#653781] to-[#b0436d] rounded-3xl shadow-xl p-16 text-white text-center max-w-5xl mx-auto my-20 md:my-18"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={itemVariants}
        >
          Ready to Start Learning?
        </motion.h2>
        <motion.p
          className="mb-8 text-lg max-w-xl mx-auto"
          variants={itemVariants}
        >
          Explore our programs and join a community that nurtures knowledge,
          skills, and values.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-[#653781] font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          variants={itemVariants}
        >
          Contact Us
        </motion.a>
      </motion.section>
    </main>
  );
};

export default Education;