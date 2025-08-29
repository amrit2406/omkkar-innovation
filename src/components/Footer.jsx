// components/Footer.jsx
import React from "react";
import {
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialIcons = [
    { icon: <Linkedin size={24} />, link: "#", label: "LinkedIn" },
    { icon: <Facebook size={24} />, link: "#", label: "Facebook" },
    { icon: <Twitter size={24} />, link: "#", label: "Twitter" },
    { icon: <Instagram size={24} />, link: "#", label: "Instagram" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Recruitment ", href: "/recruitment" },
    { name: "Education ", href: "/education" },
    { name: "Training ", href: "/training" },
  ];

  const legalLinks = [
    { name: "Holistic Education", href: "/education" },
    { name: "Academic Excellence", href: "/education" },
    { name: "Co-curricular Activities", href: "/education" },
    { name: "Value-based Education", href: "/education" },
  ];

  const contactInfo = [
    { icon: <MapPin size={20} />, text: "Bengaluru, Karnataka, India" },
    { icon: <Mail size={20} />, text: "info@omkkarinnovations.com" },
    { icon: <Phone size={20} />, text: "+91 7899214433" },
  ];

  return (
    <motion.footer
      className="relative bg-slate-900 text-gray-300 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      {/* Background shape/gradient for visual flair */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-18 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
          {/* Brand & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link
              to="/" // your destination route
              className="inline-flex items-center gap-3 bg-white px-3 py-2 rounded-lg"
            >
              <img
                src={logo} // replace with your logo path
                alt="Omkkar Innovations Logo"
                className="h-10 w-38 object-cover"
              />
              {/* <h1 className="text-2xl md:text-4xl font-extrabold text-[#653781]">
                Omkkar Innovations
              </h1> */}
            </Link>
            <p className="text-gray-400 mt-10 max-w-sm leading-relaxed">
              Empowering the future through exceptional recruitment,
              professional education, and targeted training.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">Education</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Socials */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-purple-400">{info.icon}</span>
                  <p className="text-gray-400">{info.text}</p>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright and Bottom Line */}
        <div className="mt-16 text-center border-t border-slate-800 pt-8">
          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm font-light"
          >
            © {new Date().getFullYear()} Omkkar Innovations. All Rights
            Reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
