import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTrainingHovered, setIsTrainingHovered] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Recruitment", to: "/recruitment" },
    {
      label: "Training",
      to: "/training",
      dropdown: [
        { label: "Technical Training", to: "/training/technical" },
        { label: "Non-Technical Training", to: "/training/non-technical" },
      ],
    },
    { label: "Education", to: "/education" },
    { label: "Contact Us", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setIsTrainingOpen(false); // Close dropdown on route change
  }, [location]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="hidden lg:block bg-gradient-to-r from-[#653781] to-[#b0436d] text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <span className="flex items-center gap-2">
                <FiMail size={14} /> info@omkkarinnovations.com
              </span>
              <span className="flex items-center gap-2">
                <FiPhone size={14} /> +91 7899214433
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin size={14} /> Bengaluru, India
              </span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-200 transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-200 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-200 transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-200 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-2">
            {/* Image logo */}
            <img
              src={logo}
              alt="Omkkar Innovations Logo"
              className="h-14 w-38 rounded-lg"
            />
            {/* Brand name */}
            {/* <span className="text-xl font-bold bg-gradient-to-r from-[#653781] to-[#b0436d] bg-clip-text text-transparent">
              Omkkar Innovations
            </span> */}
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setIsTrainingHovered(true)}
                onMouseLeave={() =>
                  item.dropdown && setIsTrainingHovered(false)
                }
              >
                <Link
                  to={item.to}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${
                    location.pathname === item.to
                      ? "text-white bg-gradient-to-r from-[#653781] to-[#b0436d]"
                      : "text-gray-700 hover:text-[#b0436d]"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isTrainingHovered ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {item.dropdown && (
                  <AnimatePresence>
                    {isTrainingHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.to}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsTrainingHovered(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#b0436d] focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                {navLinks.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-0"
                  >
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setIsTrainingOpen(!isTrainingOpen)}
                          className="flex items-center justify-between w-full py-3 text-gray-700 font-medium hover:text-[#b0436d]"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isTrainingOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isTrainingOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {item.dropdown.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.to}
                                  className="block py-1 text-gray-600 hover:text-[#b0436d]"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        className="block py-3 text-gray-700 font-medium hover:text-[#b0436d]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="flex justify-center space-x-6 pt-6">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="text-[#653781] hover:text-[#b0436d]"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-[#653781] hover:text-[#b0436d]"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-[#653781] hover:text-[#b0436d]"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-[#653781] hover:text-[#b0436d]"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;
