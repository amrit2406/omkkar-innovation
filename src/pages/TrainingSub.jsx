import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from 'react-router-dom';
import {
  Book,
  Globe,
  UserCheck,
  Award,
  Calendar,
  Layers,
  Check,
  ArrowRight,
  X,
} from "lucide-react";

// Training data split into Technical and Non-Technical
const trainingPrograms = {
  technical: [
    {
      id: 1,
      title: "Full-Stack Development",
      duration: "8 Weeks",
      description:
        "Learn modern web development including frontend, backend, databases, and deployment using industry-standard tools.",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1770&auto=format&fit=crop",
      features: [
        "Frontend frameworks: React, Angular, Vue",
        "Backend development: Node.js, Express, Django",
        "Database management: SQL & NoSQL",
        "Cloud deployment: AWS, Azure, GCP",
      ],
    },
    {
      id: 2,
      title: "Data Science & AI",
      duration: "10 Weeks",
      description:
        "Gain expertise in data analytics, machine learning, and AI using Python, R, and popular frameworks.",
      image:
        "https://static.vecteezy.com/system/resources/previews/005/442/693/non_2x/data-science-analytics-internet-and-technology-concept-concept-photo.jpg",
      features: [
        "Data preprocessing & visualization",
        "Machine learning models",
        "Deep learning with TensorFlow & PyTorch",
        "AI project deployment",
      ],
    },
  ],
  'non-technical': [
    {
      id: 3,
      title: "Professional Skills Development",
      duration: "6 Weeks",
      description:
        "Enhance communication, leadership, and critical thinking through workshops and real-world case studies.",
      image:
        "https://media.istockphoto.com/id/1490859962/photo/power-soft-skills-multi-skills-responsibility-hr-human-resources-concept-personal-attribute.jpg?s=612x612&w=0&k=20&c=ToS6Yl5eZgQUc0t9FWp7tHkabQvoEe0ge1PFbPYvf7A=",
      features: [
        "Leadership & team management",
        "Effective communication",
        "Problem-solving & critical thinking",
      ],
    },
    {
      id: 4,
      title: "Project Management & Productivity",
      duration: "5 Weeks",
      description:
        "Learn modern project management methodologies, productivity tools, and team collaboration techniques.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1770&auto=format&fit=crop",
      features: [
        "Agile, Scrum & Kanban methodologies",
        "Time management & prioritization",
        "Team collaboration & conflict resolution",
      ],
    },
  ],
};

// Benefits
const benefits = [
  { icon: <UserCheck />, text: "Expert-led sessions with real-world case studies" },
  { icon: <Globe />, text: "Flexible online & offline learning options" },
  { icon: <Layers />, text: "Access to exclusive learning resources and a supportive community" },
  { icon: <Award />, text: "Internationally recognized certification upon completion" },
];

// Framer motion variants
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

const Training = () => {
  const { type } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted!");
    closeModal(); // Close modal after submission
  };

  const renderProgramSection = (title, programs) => (
    <div className="space-y-24 py-20 md:py-18 relative z-10">
      {programs.map((program, index) => (
        <motion.section
          key={program.id}
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
              <div className="p-4 rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] text-white shadow-lg">
                <Book className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#653781] leading-tight">
                {program.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{program.description}</p>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#b0436d]" /> Duration: {program.duration}
              </p>
              <ul className="space-y-2">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#b0436d] mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              onClick={openModal}
              className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Enroll Now <ArrowRight size={20} />
            </motion.button>
          </motion.div>
          <motion.div
            className={`relative w-full h-80 md:h-96 rounded-3xl shadow-xl overflow-hidden group border border-gray-100 ${
              index % 2 === 1 ? "lg:order-1" : ""
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#653781]/40 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </motion.section>
      ))}
    </div>
  );

  const displayedPrograms = type ? [trainingPrograms[type]] : Object.values(trainingPrograms);
  const heroTitle = type === 'technical' ? 'Technical Training' : type === 'non-technical' ? 'Non-Technical Training' : 'Training Programs';
  const heroDescription = type === 'technical' ? 'Explore our technical training programs designed to make you a skilled and in-demand professional in the tech industry.' : type === 'non-technical' ? 'Discover our non-technical training programs that focus on enhancing your essential soft skills for career growth.' : 'Our training programs are designed to equip you with the skills and knowledge that today’s competitive markets demand.';

  return (
    <main className="bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop')",
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
            {heroTitle}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Dynamic Training Sections */}
      {displayedPrograms.map(programSet => renderProgramSection(`${programSet[0].title.includes("Technical") ? 'Technical' : 'Non-Technical'} Training Programs`, programSet))}

      {/* Benefits */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] mb-16 text-center">
          Why Our Training Stands Out
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center
                         hover:shadow-2xl hover:border-[#b0436d] transform hover:-translate-y-2 transition-all duration-500"
              variants={itemVariants}
            >
              <div className="mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] shadow-md text-white">
                {React.cloneElement(benefit.icon, { className: "w-10 h-10" })}
              </div>
              <p className="text-gray-700 font-semibold leading-relaxed mt-4">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 md:py-18 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-[#653781] to-[#b0436d] rounded-3xl shadow-2xl p-12 md:p-20 text-center text-white relative overflow-hidden">
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
            Take the first step towards professional excellence. Explore our programs and start your journey today.
          </motion.p>
          <motion.button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#653781] font-bold px-12 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            Enroll Today <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl relative w-full max-w-lg p-8 md:p-12 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#653781] mb-6 text-center">
                Enroll Now
              </h3>
              <p className="text-center text-gray-600 mb-8">
                Fill out the form below to get started.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b0436d] transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b0436d] transition-shadow"
                    placeholder="+91-9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b0436d] transition-shadow"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b0436d] transition-shadow"
                    placeholder="I am interested in..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Training;
