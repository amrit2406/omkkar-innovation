import AboutUs from "../components/home/AboutSec";
import CTA from "../components/home/Banner";
import Banner from "../components/home/Banner";
import BlogsSection from "../components/home/BlogSec";
import ContactUs from "../components/home/ContactSec";
import CTASection from "../components/home/Cta";
import FAQ from "../components/home/FaqSec";
import HeroSlider from "../components/home/HeroSec";
import Services from "../components/home/ServicesSec";
import Testimonial from "../components/home/Testimonial";
import WhyChooseUs from "../components/home/Why";
import WhatsAppFloatingButton from "../components/WhatsAppFloatButton";


export const Home = () => {
  return (
    <main className="flex flex-col">
        <HeroSlider />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Banner />
        <FAQ />
        <Testimonial />
        <BlogsSection />
        <ContactUs />
        <CTASection />
        <WhatsAppFloatingButton />
    </main>
  );
};