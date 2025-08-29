import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Book,
  Users,
  ArrowRight,
} from "lucide-react";

const slides = [
  {
    title: "Professional Training Programs",
    subtitle: "Elevate Your Skills",
    description:
      "Transform your career with our industry-leading training programs designed for the modern professional.",
    color: "#B15C89",
    accentColor: "#925173",
    icon: <Play className="w-12 h-12" />,
    buttonText: "Explore Training",
    link: "/training",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&q=80&w=1170",
  },
  {
    title: "Comprehensive Education Solutions",
    subtitle: "Expand Your Knowledge",
    description:
      "Access world-class educational resources and programs tailored to your learning journey.",
    color: "#5A3B8F",
    accentColor: "#463078",
    icon: <Book className="w-12 h-12" />,
    buttonText: "Discover Education",
    link: "/education",
    image:
      "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?auto=format&q=80&w=1170",
  },
  {
    title: "Strategic Recruitment Services",
    subtitle: "Find Exceptional Talent",
    description:
      "Connect with top-tier professionals and opportunities through our innovative recruitment platform.",
    color: "#6A45A3",
    accentColor: "#55378B",
    icon: <Users className="w-12 h-12" />,
    buttonText: "Start Recruiting",
    link: "/recruitment",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&q=80&w=1170",
  },
];

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.98,
    rotateY: direction > 0 ? -15 : 15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    scale: 0.98,
    rotateY: direction < 0 ? 15 : -15,
  }),
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgressKey((k) => k + 1);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setProgressKey((k) => k + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setProgressKey((k) => k + 1);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setProgressKey((k) => k + 1);
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (swipe > swipeConfidenceThreshold) {
      prevSlide();
    }
  };

  return (
    <section className="relative min-h-[700px] md:h-screen max-h-[890px] overflow-hidden flex items-center justify-center bg-black/70">
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(120deg, ${slides[currentSlide].color} 40%, ${slides[currentSlide].accentColor} 100%)`,
        }}
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 120, damping: 25 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            rotateY: { duration: 0.6 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Visual Side */}
          <div className="w-full md:w-1/2 h-[280px] md:h-full flex justify-center items-center relative py-4 md:py-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="object-cover rounded-2xl shadow-xl h-full w-full md:w-[430px] md:h-[430px] max-w-[90vw]"
              style={{
                boxShadow:
                  "0 8px 36px 0 rgba(124,58,117,0.16), 0 1.5px 12px 0 #fff3",
              }}
            />
            {/* Accent gradient overlay */}
            <div
              className="absolute rounded-2xl inset-0 opacity-20"
              style={{
                background:
                  "linear-gradient(115deg, #fff 0%, rgba(255,255,255,0.0) 100%)",
              }}
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4 md:px-14 py-8 md:py-0 text-center md:text-left">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 32 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="mb-7 p-3 rounded-full bg-white/12 backdrop-blur-sm w-14 h-14 flex items-center justify-center mx-auto md:mx-0"
            >
              {slides[currentSlide].icon}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.5 }}
              className="text-3xl md:text-5xl font-black mb-2 text-white drop-shadow-lg mx-auto md:mx-0"
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.31, duration: 0.48 }}
              className="text-xl md:text-2xl font-light mb-4 text-white/90 mx-auto md:mx-0"
            >
              {slides[currentSlide].subtitle}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.48 }}
              className="text-base md:text-lg mb-8 text-white/80 max-w-lg mx-auto md:mx-0"
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.94 }} className="mx-auto md:mx-0">
              <Link
                to={slides[currentSlide].link}
                className="flex items-center px-7 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-2xl border border-white/30 bg-white/15 backdrop-blur-sm text-white hover:bg-white/25"
              >
                {slides[currentSlide].buttonText}
                <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              index === currentSlide
                ? "bg-white scale-125 border-white shadow"
                : "bg-white/60 hover:bg-white/90 border-transparent"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ProgressBar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-30 bg-white/18">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
          key={progressKey}
        />
      </div>
    </section>
  );
};

export default HeroSlider;