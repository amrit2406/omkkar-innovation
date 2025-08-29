import React from "react";
import { useParams } from "react-router-dom";

const blogDetails = [
  {
    id: 1,
    slug: "modern-recruitment",
    title: "How Modern Recruitment Works",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    author: "Rajesh Kumar",
    date: "Aug 15, 2025",
    content: `
Recruitment in 2025 has evolved with AI, data-driven platforms, and increased personalization. Companies use advanced screening tools, video interviews, and targeted reach to select the best candidates. For job seekers, building an online presence and networking is now essential.

### Key Trends:
- AI-powered resume screening
- Automated video interviews
- Personalized candidate matching
- Virtual career fairs

For businesses, this means faster hiring and better cultural fit. For job seekers, it means stronger competition but also more opportunities if they adapt quickly.
    `,
  },
  {
    id: 2,
    slug: "training-success",
    title: "Tips for Professional Training Success",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    author: "Anita Desai",
    date: "Aug 5, 2025",
    content: `
Success in professional training comes from identifying learning goals, engaging in interactive sessions, and practicing skills regularly. Leveraging peer support and applying learning in real-world scenarios leads to long-term growth.

### Proven Tips:
1. Define clear learning objectives.
2. Take notes and revisit them weekly.
3. Join study groups or discussion forums.
4. Apply new skills immediately at work.

Consistency is key — short, regular learning sessions are more effective than occasional cramming.
    `,
  },
  {
    id: 3,
    slug: "online-education",
    title: "Navigating Online Education in 2025",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    author: "Suresh Patel",
    date: "Jul 30, 2025",
    content: `
Online education now features interactive platforms, adaptive learning paths, and global collaboration. Choose recognized providers, join active communities, and balance self-paced modules with guided mentorship for effective outcomes.

### Best Practices:
- Select courses from trusted institutions.
- Stay engaged with online communities.
- Mix self-paced learning with live sessions.
- Track progress with digital tools.

The future of education is flexible, borderless, and personalized. Those who embrace it will thrive in the knowledge economy.
    `,
  },
];

const BlogDetailsSection = () => {
  const { slug } = useParams();
  const blog = blogDetails.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-red-600">Blog not found</h2>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-18">
      <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded-xl mb-8" />
      <h1 className="text-3xl font-bold text-[#653781] mb-4">{blog.title}</h1>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        <span>By {blog.author}</span>
        <span>{blog.date}</span>
      </div>
      <div className="prose max-w-none text-gray-700 whitespace-pre-line">
        {blog.content}
      </div>
    </section>
  );
};

export default BlogDetailsSection;
