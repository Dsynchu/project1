import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";   // ✅ Correct import

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      anime.timeline({ loop: false })
        .add({
          targets: headingRef.current.querySelectorAll("span"),
          translateY: [100, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 200 + 50 * i,
        });
    }
  }, []);

  const heading = "Connecting Talent with Opportunities".split(" ");

  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center text-white px-4 md:px-12">
        <h1
          ref={headingRef}
          className="text-3xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center gap-2"
        >
          {heading.map((word, i) => (
            <span key={i} className="inline-block opacity-0">
              {word}
            </span>
          ))}
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90">
          We help businesses find the right people, and individuals find their dream careers.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
