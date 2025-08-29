// components/BlogsSection.jsx
import React from "react";
import {Link} from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How Modern Recruitment Works",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Discover the process and technology that is shaping recruitment trends for businesses and job seekers.",
    author: "Rajesh Kumar",
    date: "Aug 15, 2025",
    link: "/blogs/modern-recruitment",
  },
  {
    id: 2,
    title: "Tips for Professional Training Success",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Learn proven techniques to maximize your growth through training programs in any industry.",
    author: "Anita Desai",
    date: "Aug 5, 2025",
    link: "/blogs/training-success",
  },
  {
    id: 3,
    title: "Navigating Online Education in 2025",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Explore the best strategies and tools to stay ahead in the evolving landscape of online learning.",
    author: "Suresh Patel",
    date: "Jul 30, 2025",
    link: "/blogs/online-education",
  },
];

const BlogsSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20 md:py-18">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-extrabold text-[#653781]">Latest Blogs</h2>
      <p className="mt-3 max-w-2xl mx-auto text-gray-600">
        Insights and tips to help you succeed in recruitment, training, and
        education.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {blogs.map(({ id, title, image, excerpt, author, date, link }) => (
        <div
          key={id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
        >
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-7 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-[#653781] mb-3">{title}</h3>
            <p className="text-gray-600 mb-7 flex-1">{excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>By {author}</span>
              <span>{date}</span>
            </div>
            <Link
              to={link}
              className="inline-block bg-gradient-to-r from-[#653781] to-[#b0436d] text-white px-5 py-2 rounded-md font-semibold hover:scale-105 transition-transform"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BlogsSection;
