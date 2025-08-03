import { useEffect, useRef } from "react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Hiring Trends in 2025",
      desc: "Stay ahead with the latest hiring practices and recruitment strategies shaping the job market.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      link: "#",
    },
    {
      id: 2,
      title: "Building a Strong Company Culture",
      desc: "Discover how culture drives productivity, satisfaction, and long-term employee retention.",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      link: "#",
    },
    {
      id: 3,
      title: "Career Growth Tips for Professionals",
      desc: "Practical advice for advancing your career in today’s competitive job market.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      link: "#",
    },
    {
      id: 4,
      title: "The Future of Remote Work",
      desc: "How remote and hybrid models are shaping global workplaces.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "#",
    },
    {
      id: 5,
      title: "AI in Recruitment",
      desc: "Explore how AI tools are transforming hiring decisions worldwide.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      link: "#",
    },
    {
      id: 6,
      title: "Employee Wellness Programs",
      desc: "Why investing in employee health increases company productivity.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      link: "#",
    },
    {
      id: 7,
      title: "Upskilling Your Workforce",
      desc: "How continuous learning ensures long-term business success.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      link: "#",
    },
    {
      id: 8,
      title: "Global Hiring Challenges",
      desc: "Understanding cultural differences when hiring overseas talent.",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      link: "#",
    },
    {
      id: 9,
      title: "Employer Branding",
      desc: "How companies attract top talent with the right branding.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "#",
    },
    {
      id: 10,
      title: "Future Skills 2030",
      desc: "The most in-demand skills for the next decade.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      link: "#",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let paused = false;

    const scrollStep = () => {
      if (slider && !paused) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0; // reset scroll (infinite loop)
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollStep, 30); // control speed

    slider.addEventListener("mouseenter", () => (paused = true));
    slider.addEventListener("mouseleave", () => (paused = false));

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="blog" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Insights & Updates
        </h2>

        {/* Auto-Scrolling Blog Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap relative mask-gradient"
        >
          {[...posts, ...posts].map((post, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{post.desc}</p>
                <a
                  href={post.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
    </section>
  );
}
