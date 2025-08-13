export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white relative"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1555244717-2618e5bf0214?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400">
          Sunny Hocha
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Premium brandy, whisky, and wine crafted from the finest ingredients. 
          Experience excellence in every drop.
        </p>
        <a
          href="#products"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition transform hover:scale-105"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}
