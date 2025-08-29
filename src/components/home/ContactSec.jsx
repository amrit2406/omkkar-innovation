// components/ContactUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, PhoneCall, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-pink-600" />,
    label: "Address",
    value:
      "#968, shiva nilaya virgonagar colony, avalahalli, bangalore east tq BENGALURU, KARNATAKA 560049 India",
  },
  {
    icon: <Mail className="w-6 h-6 text-pink-600" />,
    label: "Email",
    value: "info@omkkarinnovations.com",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-pink-600" />,
    label: "Phone",
    value: "+91 7899214433",
  },
];

const officeHours = [
  {
    label: "Monday - Friday",
    value: "9:00 AM - 6:00 PM",
  },
  {
    label: "Saturday, Sunday",
    value: "Closed",
  },
];

const ContactUs = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-50 via-pink-50 to-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Illustration / Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse" />
          <img
            src="https://illustrations.popsy.co/white/communication.svg"
            alt="Contact illustration"
            className="relative w-full max-w-md mx-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 0 }} // mobile: fade only
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">
            Let’s Connect
          </h2>
          <p className="text-gray-600">
            Have a question, a project in mind, or just want to say hi? Fill out
            the form below or reach us directly.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            {contactInfo.map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-3 bg-pink-100 rounded-lg shadow">{icon}</div>
                <div>
                  <p className="font-semibold text-purple-800">{label}</p>
                  <p className="text-gray-600">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          {/* <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              Office Hours
            </h3>
            <ul className="space-y-2 text-gray-700">
              {officeHours.map(({ label, value }) => (
                <li key={label} className="flex justify-between">
                  <span>{label}</span>
                  <span className="font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 border-t border-gray-200 pt-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-semibold py-3 rounded-xl shadow hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
