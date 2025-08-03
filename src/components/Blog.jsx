export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Hiring Trends in 2025",
      desc: "Stay ahead with the latest hiring practices and recruitment strategies shaping the job market.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      link: "#"
    },
    {
      id: 2,
      title: "Building a Strong Company Culture",
      desc: "Discover how culture drives productivity, satisfaction, and long-term employee retention.",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      link: "#"
    },
    {
      id: 3,
      title: "Career Growth Tips for Professionals",
      desc: "Practical advice for advancing your career in today’s competitive job market.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      link: "#"
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Insights & Updates
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
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
    </section>
  );
}
