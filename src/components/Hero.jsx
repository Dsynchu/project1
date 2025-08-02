export default function Hero() {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Connecting Talent with Opportunity
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Professional HR Consultancy for Modern Businesses
        </p>
        <a 
          href="#services" 
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}
