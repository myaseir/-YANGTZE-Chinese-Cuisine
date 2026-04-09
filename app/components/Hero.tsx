import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image with Premium Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          // Using a high-quality, moody Unsplash image placeholder for an upscale dining vibe
          backgroundImage: "url('https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2564&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Main Content Container */}
      {/* Added pt-20 md:pt-24 here to push the content below the fixed navbar */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12 w-full max-w-6xl mx-auto pt-20 md:pt-24">
        
        {/* Accent Subtitle */}
        <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6 animate-fade-in-up">
          Authentic Heritage, Modern Elegance
        </span>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white leading-tight mb-8 drop-shadow-2xl">
          Yangtze <br className="hidden md:block" />
          <span className="text-amber-400 font-light italic">Chinese Cuisine</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg mb-12 font-light leading-relaxed tracking-wide">
          Experience a culinary journey along the great river. We blend centuries-old recipes with contemporary artistry to bring you an unforgettable dining experience.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <button className="px-8 py-4 sm:px-10 bg-amber-600 hover:bg-amber-500 text-white text-sm md:text-base font-semibold tracking-widest uppercase transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-sm shadow-[0_0_20px_rgba(217,119,6,0.3)]">
            Reserve a Table
          </button>
          
          <button className="px-8 py-4 sm:px-10 bg-transparent border border-white/40 hover:border-amber-400 hover:text-amber-400 text-white text-sm md:text-base font-semibold tracking-widest uppercase transition-all duration-300 ease-in-out rounded-sm backdrop-blur-sm">
            Explore Menu
          </button>
        </div>
      </div>

      {/* Elegant Scroll Indicator (Hidden on very small screens) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 opacity-60">
        <span className="text-white text-[10px] tracking-[0.2em] uppercase">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-400 to-transparent"></div>
      </div>
    </section>
  );
}