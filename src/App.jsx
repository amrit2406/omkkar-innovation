// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/About";
import Services from "./pages/Services";
import Recruitment from "./pages/Recruitment";
import Training from "./pages/Training";
import Education from "./pages/Education";
import ContactUs from "./pages/Contact";
import BlogDetailsSection from "./components/home/BlogDetails";
import TrainingCon from "./pages/TrainingSub";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/training" element={<Training />} />
              <Route path="/training/:type" element={<TrainingCon />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blogs/:slug" element={<BlogDetailsSection />} />
              {/* Add more routes as needed */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
