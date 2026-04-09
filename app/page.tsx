import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero />
      
      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h4 className="text-amber-500 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-8">
            The Philosophy
          </h4>
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 italic leading-tight">
            Rooted in Tradition. <br/> 
            Crafted for the Modern Palate.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto italic">
            "Our kitchen is a bridge between centuries of culinary heritage and contemporary gastronomy. We honor the time-tested techniques of the East, presented with the elegance of the West."
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        
        {/* Signature Tasting Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-zinc-800 text-6xl md:text-8xl font-serif mb-4">01</span>
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 italic">Signature Tasting</h3>
            <p className="text-gray-400 font-light leading-loose mb-8">
              A curated journey through the diverse provinces of China. Experience the delicate balance of flavors, from the fiery spices of Sichuan to the subtle refinement of Canton.
            </p>
            <ul className="space-y-3 text-[10px] tracking-[0.3em] uppercase text-amber-500 font-semibold mb-10">
              <li className="flex items-center gap-3">Seasonal Ingredients</li>
              <li className="flex items-center gap-3">Expert Tea Pairings</li>
              <li className="flex items-center gap-3">Chef's Narrative</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden bg-zinc-900 shadow-2xl relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" 
                alt="Signature Dim Sum" 
             />
          </div>
        </div>

        {/* Private Dining */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-zinc-900 shadow-2xl relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" 
                alt="Private Dining Room" 
             />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-zinc-800 text-6xl md:text-8xl font-serif mb-4">02</span>
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 italic">Private Events</h3>
            <p className="text-gray-400 font-light leading-loose mb-8">
              Exclusive spaces designed for intimate gatherings, corporate dinners, and grand celebrations. Allow our dedicated hospitality team to orchestrate an unforgettable evening.
            </p>
            <Link 
              href="/private-dining" 
              className="text-amber-500 text-[10px] tracking-[0.4em] uppercase font-bold border-b border-amber-500/30 hover:border-amber-500 pb-1 transition-colors"
            >
              Inquire Availability
            </Link>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-32 px-6 text-center text-white">
        <h2 className="text-3xl md:text-6xl font-serif mb-12 italic drop-shadow-lg">
          Reserve Your Experience
        </h2>
        <Link 
          href="/reservations"
          className="inline-block px-12 py-5 bg-amber-600 text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-amber-500 transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] rounded-sm hover:-translate-y-1"
        >
          Book a Table
        </Link>
      </section>
    </main>
  );
}