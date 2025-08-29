// components/Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    designation: "HR Manager",
    img: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    feedback:
      "Omkkar Innovations helped us find the perfect candidates quickly. Their recruitment process is streamlined and effective.",
  },
  {
    name: "Priya Singh",
    designation: "Training Coordinator",
    img: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    feedback:
      "The training programs are top-notch and truly elevated the skills of our workforce. Highly recommended!",
  },
  {
    name: "Anil Mehta",
    designation: "Education Consultant",
    img: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    feedback:
      "Their education solutions are comprehensive and tailored to real needs. The team is supportive and professional.",
  },
  {
    name: "Rohan Kumar",
    designation: "Software Engineer",
    img: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    feedback:
      "A seamless and enriching experience! Omkkar Innovations' education platform provided the right tools to accelerate my career.",
  },
];

const Testimonial = () => {
  return (
    <section className="relative py-20 md:py-18 overflow-hidden bg-gradient-to-br from-[#f4ecf8] via-[#fdf5f8] to-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#653781]/10 via-[#b0436d]/10 to-transparent blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight text-[#653781]">
          What <span className="text-[#b0436d]">Our Clients</span> Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          observer={true}
          observeParents={true}
          slidesPerGroup={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative p-6 m-8 rounded-3xl bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border-t-4 border-[#b0436d]/40">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-tr from-[#653781] to-[#b0436d] text-white rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg mx-auto">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 italic text-lg mb-6 leading-relaxed text-center flex-grow">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#653781] mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 font-medium">{testimonial.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
