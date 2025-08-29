import React from "react";
import { motion } from "framer-motion";
import { Star, Award, HeartHandshake } from "lucide-react";

const AboutUs = () => {
  const containerVariants = {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white text-gray-800 py-20 md:py-18 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Animated Image */}
          <motion.div
            className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 m-auto flex items-center justify-center">
              {/* First rotating circle */}
              <div
                className="absolute w-full h-full max-w-[350px] max-h-[350px] animate-spin rounded-xl"
                style={{
                  animationDuration: "12s",
                  background:
                    "conic-gradient(from 0deg, #ec4899, #a855f7, #06b6d4)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "4px", // border thickness
                }}
              />

              {/* Second rotating rounded square (reverse) */}
              <div
                className="absolute w-[380px] h-[380px] rounded-2xl border-4 border-cyan-400 animate-spin"
                style={{
                  animationDuration: "18s",
                  animationDirection: "reverse",
                }}
              />
            </div>

            {/* Image Container with Custom Shape */}
            <div className="relative w-full h-full max-w-[400px] max-h-[400px] rounded-[50%_50%_50%_50%_/_50%_50%_50%_50%] overflow-hidden shadow-2xl transition-all duration-500 hover:rounded-full">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="About Omkkar Innovations"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Right: Animated Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#653781] leading-tight">
              A Story of Innovation
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At Omkkar Innovations, we are more than a service provider; we are
              a dedicated partner in your journey toward growth and success.
              Founded on the principles of **integrity**, **innovation**, and
              **excellence**, we've built a legacy of empowering individuals and
              organizations.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white rounded-xl flex items-center justify-center">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Commitment
                  </h3>
                  <p className="text-gray-600">
                    We are committed to delivering tailored solutions that meet
                    your unique needs, from finding the perfect talent to
                    providing world-class training and education.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white rounded-xl flex items-center justify-center">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    Our vision is to be the leading force in innovation, shaping
                    a future where individuals and companies can thrive
                    together.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#653781] to-[#b0436d] text-white rounded-xl flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Team
                  </h3>
                  <p className="text-gray-600">
                    Comprised of industry veterans and forward-thinkers, our
                    team brings a wealth of expertise to every challenge,
                    ensuring exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
