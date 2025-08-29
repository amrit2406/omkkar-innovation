import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

// Framer motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
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

const ContactUs = () => {
  return (
    <main className="bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* Dynamic background blur */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#653781]/5 via-[#b0436d]/5 to-transparent blur-[150px] opacity-70" /> */}

      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=870&auto=format&fit=crop')",
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions or want to work with us? Reach out and we'll get
            back to you promptly.
          </motion.p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <motion.section
        className="relative max-w-7xl mx-auto px-6 py-20 md:py-18 grid lg:grid-cols-2 gap-16 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {/* Contact Info */}
        <div className="flex flex-col space-y-12">
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b0436d] mb-4">
              Get in Touch
            </h2>

            <div className="grid gap-6">
              {/* Office Address */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-200">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] text-white shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                  <p className="text-gray-600">
                    #968, shiva nilaya virgonagar colony, avalahalli, bangalore east tq BENGALURU, KARNATAKA 560049 India
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-200">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] text-white shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@omkkarinnovations.com</p>
                  <p className="text-gray-600">hr@omkkarinnovations.com</p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-200">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] text-white shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+91 7899214433</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-200">
                <div className="p-3 rounded-full bg-gradient-to-tr from-[#653781] to-[#b0436d] text-white shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM to 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-10 rounded-3xl shadow-2xl space-y-6 lg:ml-auto lg:w-full max-w-lg lg:max-w-none"
          onSubmit={(e) => e.preventDefault()}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#653781] mb-6">
            Send us a message
          </h2>
          <div>
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0436d] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0436d] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0436d] transition-colors"
            />
          </div>
          <motion.button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white font-semibold w-full py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message <ArrowRight size={20} />
          </motion.button>
        </motion.form>
      </motion.section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239129.20164542197!2d77.46612614452616!3d12.953945614144489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1756382508887!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
