"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function PrivateDiningPage() {
  const portfolio = [
    {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
      title: "The Imperial Suite",
      type: "Grand Celebrations",
      description: "A lavish space designed for milestone events, featuring a grand mahogany table and panoramic views."
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
      title: "The Lotus Room",
      type: "Intimate Gatherings",
      description: "Soft ambient lighting and traditional silk screens for a secluded, peaceful dining experience."
    },
    {
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
      title: "Chef's Table",
      type: "Culinary Journey",
      description: "An exclusive front-row seat to our culinary artistry with a custom tasting menu."
    },
    {
      src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop",
      title: "The Bamboo Pavilion",
      type: "Corporate Events",
      description: "A sophisticated, minimalist space equipped for discrete business dinners and presentations."
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
      title: "The Jade Cellar",
      type: "Wine & Spirits",
      description: "Surrounded by our curated collection of vintage wines and rare Chinese spirits."
    },
    {
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
      title: "The Dynasty Hall",
      type: "Full Buyout",
      description: "Exclusive use of our primary dining space for your most spectacular private affairs."
    },
  ];

  const ORDER_LINK = "/reservations"; // Updated to internal routing or keep WhatsApp link

  return (
    <main className="min-h-screen bg-zinc-950 pt-24 selection:bg-amber-600/30 selection:text-amber-200">
      
      {/* Editorial Header */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 text-[10px] md:text-xs tracking-[0.8em] font-bold uppercase mb-8 block"
        >
          Exclusive Experiences
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-[10rem] font-serif text-white mb-10 italic leading-[0.8] tracking-tighter"
        >
          Private <br className="hidden md:block" /> Dining
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-20 h-[1px] bg-amber-500 mx-auto mb-10"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 font-light text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed italic"
        >
          "Where tradition meets exclusivity. We don't just serve meals; we orchestrate unforgettable culinary journeys."
        </motion.p>
      </section>

      {/* Luxury Masonry-Style Grid */}
      <section className="px-6 lg:px-20 max-w-[1600px] mx-auto py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {portfolio.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-800">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 backdrop-blur-[2px]">
                  <p className="text-amber-400 text-[10px] tracking-[0.4em] uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.type}
                  </p>
                  <h3 className="text-white text-3xl font-serif italic mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-light italic opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-150">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bespoke Process Section */}
      <section className="py-32 bg-zinc-900 mt-24 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm tracking-[0.5em] uppercase text-zinc-500 mb-12">The Booking Process</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <span className="text-2xl font-serif italic text-amber-500">01. Inquiry</span>
              <p className="text-gray-400 text-sm mt-4 font-light">Connect with our events team to discuss your party size, occasion, and date preferences.</p>
            </div>
            <div>
              <span className="text-2xl font-serif italic text-amber-500">02. Curation</span>
              <p className="text-gray-400 text-sm mt-4 font-light">Collaborate with our Executive Chef to customize a tasting menu and perfect tea or wine pairings.</p>
            </div>
            <div>
              <span className="text-2xl font-serif italic text-amber-500">03. The Experience</span>
              <p className="text-gray-400 text-sm mt-4 font-light">Arrive to a dedicated staff, exclusive ambiance, and flawless execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 italic tracking-tight">
            Reserve Your Room <br/> 
            <span className="text-xl md:text-2xl font-light text-zinc-500 block mt-4">Intimate spaces for discerning guests</span>
          </h2>
          <motion.a 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={ORDER_LINK}
            className="inline-block px-16 py-6 bg-amber-600 text-white text-[10px] tracking-[0.5em] uppercase font-bold transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] hover:bg-amber-500 rounded-sm"
          >
            Inquire Now
          </motion.a>
        </div>
      </section>

      {/* Refined Footer (Mini Footer for Page) */}
      <footer className="pb-20 text-center border-t border-zinc-800 pt-12 mx-12">
        <p className="text-[9px] tracking-[0.6em] uppercase text-zinc-500">
          YANGTZE CHINESE CUISINE <span className="mx-4 text-zinc-700">|</span> 
          Rawalpindi <span className="mx-4 text-zinc-700">|</span> 
          By Reservation Only
        </p>
      </footer>
    </main>
  );
}